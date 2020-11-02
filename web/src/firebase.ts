import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY || '';
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID || '';
const senderId = process.env.REACT_APP_FIREBASE_SENDER_ID || '';
const appId = process.env.REACT_APP_FIREBASE_APP_ID || '';
const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || '';

if (firebase.apps.length === 0) {  
  firebase.initializeApp({
    apiKey: apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId: projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: senderId,
    appId: appId,
    measurementId: measurementId,
  });
}

export const auth = firebase.auth();
export const functions = firebase.app().functions('asia-northeast1');

export default firebase;
