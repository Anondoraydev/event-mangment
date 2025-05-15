// firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBIXGYmSHQ3ikmc7Se1MQl8Uj9fbbgzSW8",
  authDomain: "ancient-truth-446807-h1.firebaseapp.com",
  projectId: "ancient-truth-446807-h1",
  storageBucket: "ancient-truth-446807-h1.appspot.com",
  messagingSenderId: "187499274386",
  appId: "1:187499274386:web:4c28d2702715181a73464b",
  measurementId: "G-F2LGE4B707"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
