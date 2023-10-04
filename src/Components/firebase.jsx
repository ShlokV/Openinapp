import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlBEoJjW9oRFf_SRFMIor68sly9-My8Ig",
  authDomain: "openaiapp-c299d.firebaseapp.com",
  projectId: "openaiapp-c299d",
  storageBucket: "openaiapp-c299d.appspot.com",
  messagingSenderId: "481020789018",
  appId: "1:481020789018:web:4d9933dfd4c7644cedaca3",
  measurementId: "G-X3LDNLX6RZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
