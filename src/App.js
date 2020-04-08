import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import LoadAnimation from './components/LoadAnimation/LoadAnimation';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Explore from './components/Explore/Explore';
import Search from './components/Search/Search';
import About from './components/About/About';
import Support from './components/Support/Support';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  let display = null;

  useEffect(() => {
    const changeView = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(changeView);
  }, [isLoading]);

  if (isLoading) {
    display = <LoadAnimation />;
  }

  return (
    <BrowserRouter>
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
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/support">
                <Support />
              </Route>
            </Switch>
            <Footer />
          </motion.div>
        }
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
