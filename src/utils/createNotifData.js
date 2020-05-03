function createNotifData(savedQuote, savedIDs) {
  if (!savedQuote || !savedIDs) {
    return;
  }

  let { notificationFrequency } = savedIDs[savedQuote._id];
  notificationFrequency = parseInt(notificationFrequency + "000");

  const notifData = {
    body: `${savedQuote.author}: ${savedQuote.content}`
  };

  return {
    notifData,
    notificationFrequency
  };
}

export {
  createNotifData
};