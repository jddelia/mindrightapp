import axios from 'axios';

const key = "AAAAHBm5F1g:APA91bF7PLVRe-W0xr2Jtc3WLSkdI9IM3_MdNMdPKKurQlMHkHG0HrX6uhbCICFAAPjQ89ccnJFUt9zzWKQ89qEcza7SBFDLFWryQKnhN4D8zbhO__OxFQPb2F7785pEjV5M3bCNhKW8";
const postURL = "https://fcm.googleapis.com/fcm/send";
const mindRightMainLogo = "https://i.imgur.com/yrDnY9e.png";

function createNotification(
  {
    notificationBody,
    userToken
  }
) {
  const notificationInfo = {
    "collapse_key" : "type_a",
    "notification" : {
      "body" : `${notificationBody}`,
      "title": "MINDRIGHT",
      "icon": mindRightMainLogo
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