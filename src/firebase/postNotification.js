import axios from 'axios';

const key = "";
const postURL = "";
const mindRightMainLogo = "";
const notificationBadge = "";

function createNotification(
  {
    notificationBody,
    userToken
  }
) {
  const notificationInfo = {
    //"collapse_key": "type_a",
    "ttl": "10000",
    "notification": {
      "title": "MINDRIGHT",
      "body": `${notificationBody}`,
      "icon": mindRightMainLogo,
      "badge": notificationBadge
    },
    "to": `${userToken}`
  }

  const fetchOptions = {
    url: "",
    method: "post",
    headers: {
      "Authorization": `key=${""}`,
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