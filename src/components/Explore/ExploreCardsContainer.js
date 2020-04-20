import React, { useState, useEffect, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useToasts } from 'react-toast-notifications';

import QuoteCard from './QuoteCard/QuoteCard';
import ExploreControls from './ExploreControls/ExploreControls';
import NoMatches from './NoMatches';

import QuotesContext from '../../context/QuotesContext';

const spinner = (
  <div className="lds-ring">
    <div></div><div></div><div></div><div></div>
  </div>
);
let allQuotes = null;
let randomQuotesList = null;
let filteredQuotes = null;
let randomSample = [1,5,3,9,2,0,8,20,7];

function ExploreCardsContainer() {
  const { quotes, setSavedQuotes, savedIDs, setSavedIDs, savedQuotes } = useContext(QuotesContext);
  const [quotesList, setQuotesList] = useState();
  const [selectAll, setSelectAll] = useState(false);
  const [filter, setFilter] = useState("");
  const { addToast } = useToasts();

  useEffect(() => {
    if (quotes) {
      if (!randomQuotesList) {
        randomQuotesList = randomSample.map((randomIndex) => {
          const quote = quotes[randomIndex];
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
              addQuote={handleSavedQuotes}
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
            addQuote={handleSavedQuotes}
          />
        );
      });

      allQuotes = (
        <AnimatePresence exitBeforeEnter>
          {allQuotes}
        </AnimatePresence>
      );

      setQuotesList(allQuotes);
    } else {
      if (filter && filteredQuotes) {
        setQuotesList(filteredQuotes);
      } else {
        setQuotesList(randomQuotesList);
      }
    }
  }, [quotes, selectAll, savedIDs]);

  function handleSavedQuotes(id) {
    // Remove saved quote from localStorage
    if (id in savedIDs) {
      const updatedQuotes = savedQuotes.filter((quote) => {
        return quote._id !== id;
      });

      /*const updatedIDs = savedIDs.filter((quoteID) => {
        return quoteID !== id;
      });*/

      delete savedIDs[id];

      setSavedQuotes(updatedQuotes);
      setSavedIDs({ ...savedIDs }); // Fix quoteCard isSaved update bug

      // Reset quotes lists
      randomQuotesList = null;
      allQuotes = null;

      addToast("Quote removed.", {
        appearance: 'warning'
      });
      return;
    }

    const savedID = {};
    savedID[id] = {
      notificationFrequency: 2
    };

    const savedQuote = quotes.filter((quote) => {
      return quote._id === id;
    })[0];

    setSavedIDs((prevIDs) => ({ ...prevIDs, ...savedID }));
    
    setSavedQuotes((prevQuotes) => [...prevQuotes, savedQuote]);
    
    // Reset quotes lists
    randomQuotesList = null;
    allQuotes = null;

    addToast("Quote saved.", {
      appearance: 'success'
    });
  }

  useEffect(() => {
    if (quotes && filter) {
      filteredQuotes = quotes.filter((quote) => {
        return (
          quote.author.toLowerCase().includes(filter.toLowerCase()) ||
          quote.content.toLowerCase().includes(filter.toLowerCase()) ||
          quote.source.toLowerCase().includes(filter.toLowerCase()) ||
          quote.theme.toLowerCase().includes(filter.toLowerCase())
        );
      });

      if (filteredQuotes.length < 1) {
        filteredQuotes = (
          <AnimatePresence exitBeforeEnter>
            <NoMatches />
          </AnimatePresence>
        );

        setQuotesList(filteredQuotes);
      } else {
          filteredQuotes = filteredQuotes.map((quote) => {
            const source = quote.source === quote.author ? "" : quote.source;
            let isSaved = false;

            if (id in savedIDs) {
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
                addQuote={handleSavedQuotes}
              />
            );
          });
    
          filteredQuotes = (
            <AnimatePresence exitBeforeEnter>
              {filteredQuotes}
            </AnimatePresence>
          );
    
          setQuotesList(filteredQuotes);
        }
      }
    
  }, [filter])

  function handleFilter(searchTerm) {
    setFilter(searchTerm);
  }

  function handleSelectAll(isChecked) {
    setSelectAll(isChecked);
  }

  return (
    <div className="exploreCardsContainer">
      <div className="controls">
        <ExploreControls
          handleFilter={handleFilter}
          handleSelectAll={handleSelectAll} 
        />
      </div>

      <div className="cardsContainer">
        {quotes ? quotesList : spinner}
      </div>
    </div>
  );
}

export default ExploreCardsContainer;