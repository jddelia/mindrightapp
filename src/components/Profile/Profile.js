import React from 'react';

import Header from './Header';
import ProfileCardsContainer from './ProfileCardsContainer';

function Profile() {
  return (
    <div className="profile">
      <Header />
      <ProfileCardsContainer />
    </div>
  );
}

export default Profile;