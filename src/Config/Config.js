
/*
import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAyJ8-aX2j27nMOYd9BxgLipI_q_bLD4kc",
    authDomain: "e-commerce-project-10.firebaseapp.com",
    projectId: "e-commerce-project-10",
    storageBucket: "e-commerce-project-10.appspot.com",
    messagingSenderId: "852283002404",
    appId: "1:852283002404:web:59ccfd4de0271058fdd2b1",
    measurementId: "G-E6RXGQ5E53"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const fireBaseStorage = firebase.storage();

  export {auth, db, fireBaseStorage};
*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyJ8-aX2j27nMOYd9BxgLipI_q_bLD4kc",
  authDomain: "e-commerce-project-10.firebaseapp.com",
  projectId: "e-commerce-project-10",
  storageBucket: "e-commerce-project-10.appspot.com",
  messagingSenderId: "852283002404",
  appId: "1:852283002404:web:59ccfd4de0271058fdd2b1",
  measurementId: "G-E6RXGQ5E53"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


