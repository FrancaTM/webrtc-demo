import "./style.css";

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm-wt74brmX_J7wvY3UslOm-0yOQmvUdQ",
  authDomain: "webrtc-demo-59dec.firebaseapp.com",
  projectId: "webrtc-demo-59dec",
  storageBucket: "webrtc-demo-59dec.appspot.com",
  messagingSenderId: "1071034679585",
  appId: "1:1071034679585:web:7bd92f35df062ccfcebe60",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
