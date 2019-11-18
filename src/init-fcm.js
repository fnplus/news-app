import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "38226611639"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BMXXuXuiGgtBPLsOlj9O8Xeg-D53bZ4xc38saTUWGCQfFnBxhEyhwU3SWxAYxp9KB_Ck8MHMeBPvb5HE9fVfuqg"
);

export { messaging };