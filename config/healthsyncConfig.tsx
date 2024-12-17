import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from '@react-native-firebase/database';

//Configurações para acessar à firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQ7Pwq9-xEADq1nfszDjLU7VszUPcnSBU",
  authDomain: "engsoftware-6cb7b.firebaseapp.com",
  projectId: "engsoftware-6cb7b",
  storageBucket: "engsoftware-6cb7b.firebasestorage.app",
  messagingSenderId: "571223801510",
  appId: "1:571223801510:web:40bc1735bfec0f3a63fe67"
};

//Inicializar a firebase com os dados fornecidos
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
console.log(FIREBASE_AUTH);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

export const FIREBASE_REALTIME_DB = getDatabase();
