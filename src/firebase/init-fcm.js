import * as firebase from "firebase/app";
import "firebase/messaging";

const  firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  ""
);

export { messaging };