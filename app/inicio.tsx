import { Text, View, Image } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { theme } from '../assets/theme';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/inicioStyles';

export default function Index({ navigation }: { navigation: any }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Sign In');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Escola Aprende a Descansar</Text>
        <Ionicons name="school" size={210} color={theme.colorDarkBlue} />
      </View>

      <View style={styles.content}>
        <Text
          style={styles.text}
        >
          Bem Vind@ à {'\n'}
          Aplicação da tua Escola
        </Text>
        <View style={styles.buttonContainer}>
      {/* Sombra deslocada */}
      <View style={styles.shadowLayer} />
      {/* Botão principal */}
      <View style={styles.button}>
        <TouchableOpacity onPress={handleLogin} style={styles.touchable}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Vamos Começar</Text>
            <AntDesign name="arrowright" size={20} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
      </View>
    </View>
  );
}
