import { initializeApp } from "firebase/app";
import { APP_ID, FIREBASE_API_KEY, PROJECT_ID } from "@env";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  // authDomain: "project-id.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com",
  projectId: PROJECT_ID,
  // storageBucket: "project-id.appspot.com",
  // messagingSenderId: "sender-id",
  appId: APP_ID,
  // measurementId: "G-measurement-id",
};

export const app = initializeApp(firebaseConfig);
