import React, { useState, useEffect } from 'react';
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
import Login from './components/Login/Login';

import QuotesContext from './context/QuotesContext';
import localStorageUtils from './utils/localStorageUtils';
import CustomToast from './Toasts/CustomToast';

const { 
  fetchStoredQuotes, 
  fetchStoredIDs, 
  storeQuotes, 
  storeIDs, 
  serializeData 
} = localStorageUtils;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState(fetchStoredQuotes());
  const [savedIDs, setSavedIDs] = useState(fetchStoredIDs());
  const [frequency, setFrequency] = useState(2);
  let display = null;

  useEffect(() => {
    const serializedQuotes = serializeData(savedQuotes);
    const serializedIDs = serializeData(savedIDs);
    storeQuotes(serializedQuotes);
    storeIDs(serializedIDs);
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
                  <Route exact path="/login">
                    <Login />
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
