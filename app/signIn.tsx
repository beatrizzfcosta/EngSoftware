import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  Alert,
  ImageBackground,
} from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { theme } from '../assets/theme';
import { styles } from './styles/signInStyles';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function LoginPage({ navigation }: { navigation: any }) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Função que faz o login com email e password do utilizador e se assim for navegar para a homePage

  const handleHomePage = async () => {
    try {
      await auth().signInWithEmailAndPassword(mail, password);
      console.log('autenticado');
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      setErrorMessage('Senha ou email incorretos, tente novamente.');
    }
  }; 

  // Navegação para página de registo
  const handleRegisto = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Escola Aprende a Descansar</Text>
        <Ionicons name="school" size={240}color={theme.colorDarkBlue} />
      </View>
      <View style={styles.formContainer}>
      <View>
      <Text style={styles.label}>Email de Alun@/Professor@</Text>
      <Input
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Insira seu Email de Alun@/Professor@"
        placeholderTextColor="#a3a19e"
        value={mail}
        onChangeText={setMail}
        leftIcon={
          <Ionicons name="school" size={24} color={theme.colorDarkBlue} />
        }/>
      </View>
      <View>
      <Text style={styles.label}>Palavra Passe</Text>
      <Input
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Insira sua Palavra Passe"
        placeholderTextColor="#a3a19e"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        leftIcon={
          <FontAwesome name="lock" size={24} color={theme.colorDarkBlue} />
        }
      />
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      
         <View style={styles.buttonContainer}>
            {/* Sombra deslocada */}
            <View style={styles.shadowLayer} />
            {/* Botão principal */}
            <View style={styles.button}>
              <TouchableOpacity onPress={handleHomePage}
               style={styles.touchable}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Vamos Começar</Text>
                  <AntDesign name="arrowright" size={20} color="#000" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

      <TouchableOpacity>
        <Text style={styles.registerText} onPress={handleRegisto}>
          Don't have an account yet? Sign up here!
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
