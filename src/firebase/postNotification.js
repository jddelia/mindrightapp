import axios from 'axios';

const key = "AAAAHBm5F1g:APA91bF7PLVRe-W0xr2Jtc3WLSkdI9IM3_MdNMdPKKurQlMHkHG0HrX6uhbCICFAAPjQ89ccnJFUt9zzWKQ89qEcza7SBFDLFWryQKnhN4D8zbhO__OxFQPb2F7785pEjV5M3bCNhKW8";
const postURL = "https://fcm.googleapis.com/fcm/send";
const mindRightMainLogo = "https://i.imgur.com/yrDnY9e.png";
const notificationBadge = "https://i.imgur.com/GY9lfvL.png";

function createNotification(
  {
    notificationBody,
    userToken
  }
) {
  const notificationInfo = {
    "collapse_key" : "type_a",
    "notification" : {
      "title": "MINDRIGHT",
      "body": `${notificationBody}`,
      "icon": mindRightMainLogo,
      "badge": notificationBadge,
      "vibrate": [1,2,3]
    },
    "to": `${userToken}`
  }

  const fetchOptions = {
    url: postURL,
    method: "post",
    headers: {
      "Authorization": `key=${key}`,
      "Content-Type": "application/json"
    },
    data: notificationInfo
  }

  return fetchOptions;
}

function postNotification(options) {
  axios(options)
    .then(data => console.log("Success"))
    .catch((err) => {
      console.log(err);
    });
}

export {
  createNotification,
  postNotification
}