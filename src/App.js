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
import { initializeScheduler } from './utils/notificationScheduler';

const { 
  fetchStoredQuotes, 
  fetchStoredIDs, 
  storeQuotes, 
  storeIDs,
  storeUserToken
} = indexedDBUtils;

let token = null;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState(null);
  const [savedIDs, setSavedIDs] = useState(null);
  const [frequency, setFrequency] = useState(2);
  const [timers, setTimers] = useState({});
  const isInitialMount = useRef(true);
  let display = null;

  useEffect(() => {
    async function setupFirebaseMessaging() {
      messaging.requestPermission()
        .then(async function() {
          token = await messaging.getToken();
          storeUserToken(token);
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

        const schedulerDeps = {
          savedQuotes: savedQuotes,
          savedIDs: savedIDs,
          timers: timers,
          setTimers: setTimers
        };

        initializeScheduler(schedulerDeps);
      } else {
        storeQuotes(savedQuotes);
        storeIDs(savedIDs);
      }
    }
  }, [savedQuotes, savedIDs]);

  useEffect(() => {
    if (isLoading) {
      const changeView = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(changeView);
    }

    async function fetchData() {
      const response = await axios.get('');
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
            setFrequency,
            timers,
            setTimers
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
