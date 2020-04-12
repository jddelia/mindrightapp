import React, { useState, useEffect, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

import QuoteCard from './QuoteCard';
import ExploreControls from './ExploreControls/ExploreControls';

import QuotesContext from '../../context/QuotesContext';

const spinner = (
  <div className="lds-ring">
    <div></div><div></div><div></div><div></div>
  </div>
);
let allQuotes = null;
let randomQuotesList = spinner;
let randomSample = [1,5,3,9,2,0,8,20,7];

function ExploreCardsContainer() {
  const quotes = useContext(QuotesContext);
  const [selectAll, setSelectAll] = useState(false);
  const [quotesList, setQuotesList] = useState();

  useEffect(() => {
    if (quotes) {
      if (randomQuotesList) {
        randomQuotesList = randomSample.map((randomIndex) => {
          const quote = quotes[randomIndex];
          const source = quote.source === quote.author ? "" : quote.source;
    
          return (
            <QuoteCard
            key={quote._id}
            author={quote.author}
            content={quote.content}
            source={source}
            theme={quote.theme}
            />
          );
        });
      }
    }

    if (selectAll) {
      if (allQuotes) {
        setQuotesList(allQuotes);
      }

      allQuotes = quotes.map((quote) => {
        const source = quote.source === quote.author ? "" : quote.source;
        return (
          <QuoteCard
          key={quote._id}
          author={quote.author}
          content={quote.content}
          source={source}
          theme={quote.theme}
          />
        );
      });

      setQuotesList(allQuotes);
    } else {
      setQuotesList(randomQuotesList);
    }
  }, [quotes, selectAll]);

  function handleSelectAll(isChecked) {
    setSelectAll(isChecked);
  }

  return (
    <div className="exploreCardsContainer">
      <div className="controls">
        <ExploreControls handleSelectAll={handleSelectAll} />
      </div>

      <div className="cardsContainer">
        {quotesList}
      </div>
    </div>
  );
}

export default ExploreCardsContainer;