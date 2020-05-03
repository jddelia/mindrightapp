import React, { useContext } from 'react';

import Header from './Header';
import ProfileCardsContainer from './ProfileCardsContainer';
import NoSavedQuotes from './NoSavedQuotes';

import QuotesContext from '../../context/QuotesContext';

function Profile() {
  const { savedQuotes } = useContext(QuotesContext);

  console.log(!savedQuotes.length)

  return (
    <div className="profile">
      <Header />
      {Array.isArray(savedQuotes) && savedQuotes.length ? <ProfileCardsContainer /> : <NoSavedQuotes />}
    </div>
  );
}

export default Profile;