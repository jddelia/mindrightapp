import React, { useContext } from 'react';

import QuoteCard from './QuoteCard';
import PlaceHolderCards from './PlaceHolderCards/PlaceHolderCards';
import ExploreControls from './ExploreControls/ExploreControls';

import QuotesContext from '../../context/QuotesContext';

function ExploreCardsContainer() {
  const quotes = useContext(QuotesContext);

  const quotesList = quotes ? (
    quotes.map((quote) => {
      return (
        <QuoteCard
        key={quote._id}
        author={quote.author}
        content={quote.content}
        source={quote.source}
        theme={quote.theme}
        />
      );
    })
  ) : (
    <PlaceHolderCards />
  );

  return (
    <div className="exploreCardsContainer">
      <div className="controls">
        <ExploreControls />
      </div>

      <div className="cardsContainer">
        {quotesList}
      </div>
    </div>
  );
}

export default ExploreCardsContainer;