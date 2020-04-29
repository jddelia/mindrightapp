importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js");

const  firebaseConfig = {
  apiKey: "AIzaSyB0CKZb0MlG0sRvTqm-BkdYTMnAHTNKLl4",
  authDomain: "mindright-app-2.firebaseapp.com",
  databaseURL: "https://mindright-app-2.firebaseio.com",
  projectId: "mindright-app-2",
  storageBucket: "mindright-app-2.appspot.com",
  messagingSenderId: "120690644824",
  appId: "1:120690644824:web:42b1ff65100531bf83372d"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});

self.addEventListener("notificationclick", function(event) {
     console.log(event);
});