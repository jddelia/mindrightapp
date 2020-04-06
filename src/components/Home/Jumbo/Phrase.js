import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const terms = [
  { id: 0, content: 'Productivity'},
  { id: 1, content: 'Focus'},
  { id: 2, content: 'Concentration' },
];

function Phrase() {
  const [currentIdx, setIdx] = useState(0);

  useEffect(() => {
    const cycleTerm = setInterval(changeIndex, 3500);

    return () => clearInterval(cycleTerm);
  }, [currentIdx]);

  function changeIndex() {
    setIdx((prevIdx) => {
      return (prevIdx + 1) % (terms.length);
    });
  }

  const termsList = terms.map((term) => {
    return (
      <motion.span
        key={term.id}
        className="phraseTextAnimated"
        initial={{ opacity: 0, scale: 1.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.6 }}
        transition={{ 
          opacity: { 
            duration: 0.3, 
            delay: 0 
          }, 
          scale: {
            duration: 0.4
          } 
        }}
      >
        {term.content}
      </motion.span>
    );
  });

  return (
    <div className="phrase">
      <p className="phraseText">
        The Mindfulness Tool,
        To Enhance <br/> <span className="animPhraseContainer">
          <AnimatePresence exitBeforeEnter>
            {termsList[currentIdx]}
          </AnimatePresence>
        </span>
      </p>
    </div>
  );
}

export default Phrase;