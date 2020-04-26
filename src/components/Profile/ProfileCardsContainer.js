import React, { useState, useEffect, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useToasts } from 'react-toast-notifications';

import QuoteCard from '../QuoteCard/QuoteCard';

import QuotesContext from '../../context/QuotesContext';

let profileQuotesList = null;

const spinner = (
  <div className="lds-ring">
    <div></div><div></div><div></div><div></div>
  </div>
);

function ProfileCardsContainer() {
  const { savedQuotes, setSavedQuotes, savedIDs, setSavedIDs } = useContext(QuotesContext);
  const [quotesList, setQuotesList] = useState();
  const { addToast } = useToasts();

  useEffect(() => {
    profileQuotesList = savedQuotes.map((quote) => {
      const source = quote.source === quote.author ? "" : quote.source;
      let isSaved = false;

      if (quote._id in savedIDs) {
        isSaved = true;
      }

      return (
        <QuoteCard
          key={quote._id}
          id={quote._id}
          author={quote.author}
          content={quote.content}
          source={source}
          theme={quote.theme}
          isSaved={isSaved && " savedCard"}
          addQuote={handleSavedProfileQuotes}
        />
      );
    });

    profileQuotesList = (
      <AnimatePresence>
        {profileQuotesList}
      </AnimatePresence>
    );

    setQuotesList(profileQuotesList);
  }, [savedIDs]);

  function handleSavedProfileQuotes(id) {
    // Remove saved quote from localStorage
    const updatedQuotes = savedQuotes.filter((quote) => {
      return quote._id !== id;
    });

    delete savedIDs[id];

    setSavedQuotes(updatedQuotes);
    setSavedIDs({ ...savedIDs }); // Fix quoteCard isSaved update bug

    // Reset quotes lists
    profileQuotesList = null;

    addToast("Quote removed.", {
      appearance: 'warning'
    });

    /*const savedID = {};
    savedID[id] = {
      notificationFrequency: 2
    };

    const savedQuote = quotes.filter((quote) => {
      return quote._id === id;
    })[0];

    setSavedIDs((prevIDs) => ({ ...prevIDs, ...savedID }));
    
    setSavedQuotes((prevQuotes) => [...prevQuotes, savedQuote]);
    
    // Reset quotes list
    profileQuotesList = null;

    addToast("Quote saved.", {
      appearance: 'success'
    });*/
  }

  return (
    <div className="profileCardsContainer">
      <div className="cardsContainer">
        {savedQuotes ? quotesList : spinner}
      </div>
    </div>
  );
}

export default ProfileCardsContainer;