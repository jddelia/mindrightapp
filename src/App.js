import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import LoadAnimation from './components/LoadAnimation/LoadAnimation';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Explore from './components/Explore/Explore';
import About from './components/About/About';
import Profile from './components/Profile/Profile';

import QuotesContext from './context/QuotesContext';
import indexedDBUtils from './utils/IndexedDBUtils';
import CustomToast from './Toasts/CustomToast';

import { messaging } from './firebase/init-fcm';
import { createNotification, postNotification } from './firebase/postNotification';

const { 
  fetchStoredQuotes, 
  fetchStoredIDs, 
  storeQuotes, 
  storeIDs,
  storeUserToken,
  fetchUserToken
} = indexedDBUtils;

let token = null;

async function buildNotification(notifData) {
  const userToken = await fetchUserToken();

  const notificationData = {
    notificationBody: notifData.body,
    userToken: userToken
  };

  const notifiticationOptions = createNotification(notificationData);
  postNotification(notifiticationOptions);
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState(null);
  const [savedIDs, setSavedIDs] = useState(null);
  const [frequency, setFrequency] = useState(2);
  const isInitialMount = useRef(true);
  let display = null;

  useEffect(() => {
    async function setupFirebaseMessaging() {
      messaging.requestPermission()
        .then(async function() {
          token = await messaging.getToken();
          storeUserToken(token);

          const notificationData = {
            notificationBody: "This is a cool test!",
            userToken: token
          };
      
          //const notifiticationOptions = createNotification(notificationData);
          //postNotification(notifiticationOptions);
        })
        .catch(function(err) {
          console.log("Unable to get permission to notify.", err);
        });
    }

    setupFirebaseMessaging();
  }, []);

  useEffect(() => {
    if (!(savedQuotes && savedIDs)) {
      fetchStoredQuotes().then((data) => {
        setSavedQuotes(data);
      });

      fetchStoredIDs().then((data) => {
        setSavedIDs(data);
      });
    } else {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else if (savedQuotes) {
        storeQuotes(savedQuotes);
        storeIDs(savedIDs);

        const notifQuote = savedQuotes[savedQuotes.length - 1];
        let { notificationFrequency } = savedIDs[notifQuote._id];
        notificationFrequency = parseInt(notificationFrequency + "000");

        const notifData = {
          body: `${notifQuote.author}: ${notifQuote.content}`
        };
        
        const notifTimeout = setTimeout(() => buildNotification(notifData), notificationFrequency);
        return () => clearTimeout(notifTimeout);
      }
    }
  }, [savedQuotes, savedIDs]);

  useEffect(() => {
    if (isLoading) {
      const changeView = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(changeView);
    }

    async function fetchData() {
      const response = await axios.get('https://mindright-api.herokuapp.com/quotes/all');
      setQuotes(response.data);
    }

    fetchData();
  }, [isLoading, setQuotes]);

  if (isLoading) {
    display = <LoadAnimation />;
  }

  return (
    <BrowserRouter>
      <QuotesContext.Provider 
        value={
          {
            quotes,
            savedQuotes,
            setSavedQuotes,
            savedIDs,
            setSavedIDs,
            frequency,
            setFrequency
          }
        }
      >
        <ToastProvider
          autoDismiss
          autoDismissTimeout={2500}
          components={{ Toast: CustomToast }}
        >
          <AnimatePresence exitBeforeEnter>
            {
              isLoading ? display :
              <motion.div 
                className="App"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1}}
              >
                <Navbar />
                <Header />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/explore">
                    <Explore />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route exact path="/profile">
                    <Profile />
                  </Route>
                </Switch>
                <Footer />
              </motion.div>
            }
          </AnimatePresence>
        </ToastProvider>
      </QuotesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
