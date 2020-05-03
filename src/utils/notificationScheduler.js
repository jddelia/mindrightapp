import { createNotifData } from './createNotifData';
import { buildNotification } from './buildNotification';

const initializeScheduler = ({savedQuotes, savedIDs, timers, setTimers}) => {
  if (!Array.isArray(savedQuotes) && savedQuotes.length) {
    return;
  }

  console.log("Scheduler running...");
  for (let i = 0; i < savedQuotes.length; i++) {
    const schedulerDeps = {
      quoteID: savedQuotes[i]._id,
      savedQuote: savedQuotes[i],
      savedIDs: savedIDs,
      timerID: timers[savedQuotes._id],
      timers: timers,
      setTimers: setTimers
    }

    scheduleNotification(schedulerDeps);
  }
}

const scheduleNotification = ({quoteID, savedQuote, savedIDs, timers, setTimers}) => {
  console.log("Scheduled notification");

  const { notifData, notificationFrequency } = createNotifData(savedQuote, savedIDs);
      
  const notifTimeout = setInterval(() => buildNotification(notifData), notificationFrequency * 60);
  const newTimer = {};
  newTimer[quoteID] = notifTimeout;

  setTimers({ ...timers, ...newTimer });
}

const clearNotification = ({quoteID, timerID, timers, setTimers}) => {
  console.log("Cleared notification");
  clearInterval(timerID);
  delete timers[quoteID];
  setTimers({ ...timers });
}

const resetNotification = ({quoteID, savedQuote, savedIDs, timerID, timers, setTimers}) => {
  console.log("Reset notification");
  clearInterval(timerID);
  delete timers[quoteID];

  const { notifData, notificationFrequency } = createNotifData(savedQuote, savedIDs);
      
  const notifTimeout = setInterval(() => buildNotification(notifData), notificationFrequency * 60);
  const newTimer = {};
  newTimer[quoteID] = notifTimeout;

  setTimers({ ...timers, ...newTimer });
}

export {
  initializeScheduler,
  scheduleNotification,
  clearNotification,
  resetNotification
}