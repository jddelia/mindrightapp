import * as firebase from "firebase/app";
import "firebase/messaging";

const  firebaseConfig = {
  apiKey: "AIzaSyB0CKZb0MlG0sRvTqm-BkdYTMnAHTNKLl4",
  authDomain: "mindright-app-2.firebaseapp.com",
  databaseURL: "https://mindright-app-2.firebaseio.com",
  projectId: "mindright-app-2",
  storageBucket: "mindright-app-2.appspot.com",
  messagingSenderId: "120690644824",
  appId: "1:120690644824:web:42b1ff65100531bf83372d"
};

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BPzqQyBfJr3loOv7JJEQlNejX5EmVuuO2ITr8TnVRl7hJZdggpdJKQd20HK4ObCi1JvYlP3nQUbG3cH2PG81ovg"
);

export { messaging };