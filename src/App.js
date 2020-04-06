import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import LoadAnimation from './components/LoadAnimation/LoadAnimation';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header.js/Header';
import Home from './components/Home/Home';

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
    <AnimatePresence exitBeforeEnter>
      {
        isLoading ? display :
        <motion.div 
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Header />
          <Home />
        </motion.div>
      }
    </AnimatePresence>
  );
}

export default App;
