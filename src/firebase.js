import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDBrSGBOEzqceHGrird2cX0RmN5xGoYoI0',
  authDomain: 'chat-75524.firebaseapp.com',
  projectId: 'chat-75524',
  storageBucket: 'chat-75524.appspot.com',
  messagingSenderId: '460640205041',
  appId: '1:460640205041:web:19c8abfbb388c6e5e11150',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
