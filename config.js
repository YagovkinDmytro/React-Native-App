import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API, //*<your api-key>*//
  authDomain: "react-native-app-yd.firebaseapp.com", //*<project-id>.firebaseapp.com*//
  projectId: "react-native-app-yd", //*<project-id>*//
  storageBucket: "react-native-app-yd.firebasestorage.app", //*<your api-key>.firebasestorage.app*//
  //   databaseURL: "<https://<project-id>.firebaseio.com>", //*<https://<project-id>.firebaseio.com>*//
  //   messagingSenderId: "sender-id",
  //   appId: "app-id",
  //   measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
