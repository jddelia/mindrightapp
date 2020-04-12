import React from 'react';

import PlaceHolderCard from './PlaceHolderCard';

let cards = [];
for (let i = 0; i < 9; i++) {
  cards.push(<PlaceHolderCard />)
}

function PlaceHolderCards() {
  return (
    <>
      {cards}
    </>
  );
}

export default PlaceHolderCards;