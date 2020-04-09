import React, { useContext } from 'react';

import QuotesContext from '../../context/QuotesContext';

function ExploreCardsContainer() {
  const quotes = useContext(QuotesContext);

  return (
    <div className="exploreCardsContainer">
      {quotes.map((quote) => {
        return (
          <span>{quote.content}</span>
        )
      })}
    </div>
  );
}

export default ExploreCardsContainer;