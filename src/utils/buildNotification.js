import { createNotification, postNotification } from '../firebase/postNotification';
import indexedDBUtils from '../utils/IndexedDBUtils';

const {
  fetchUserToken
} = indexedDBUtils;

async function buildNotification(notifData) {
  const userToken = await fetchUserToken();

  const notificationData = {
    notificationBody: notifData.body,
    userToken: userToken
  };

  const notifiticationOptions = createNotification(notificationData);
  postNotification(notifiticationOptions);
}

export {
  buildNotification
};