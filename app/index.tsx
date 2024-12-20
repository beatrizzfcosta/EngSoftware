import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
//import notifee, { AndroidImportance } from '@notifee/react-native';
import RootNavigation from '../navigation/index';
import * as Font from 'expo-font';
import {
  FIREBASE_APP,
  FIREBASE_AUTH,
  FIREBASE_DB,
  FIREBASE_REALTIME_DB,
} from '../config/healthsyncConfig';
// async function setupNotificationChannel() {
//   await notifee.createChannel({
//     id: 'Reminder',
//     name: 'Medication Reminders',
//     importance: AndroidImportance.HIGH,
//     sound: 'alarm',
//   });
// }*/


export default function Index() {
    const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function initializeApp() {
      try {
        // Testar se o Firebase foi inicializado corretamente
        console.log('Firebase App:', FIREBASE_APP);
        console.log('Firebase Auth:', FIREBASE_AUTH);
        console.log('Firebase Firestore:', FIREBASE_DB);
        console.log('Firebase Realtime DB:', FIREBASE_REALTIME_DB);


        // Carregar fontes personalizadas
        await Font.loadAsync({
          Graduate: require('../assets/fonts/AbrilFatface-Regular.ttf'),
        });

        setFontLoaded(true);
      } catch (error) {
        console.error('Erro ao inicializar o aplicativo:', error);
      }
    }

    initializeApp();
  }, []);

    // Carregar fontes personalizadas
  
  // useEffect(() => {
  //   setupNotificationChannel();
  // }, []);

  return (
    //Abrir a RootNavigation para verificar se o utilizador está ativo
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <RootNavigation />
    </KeyboardAvoidingView>
  );
}
