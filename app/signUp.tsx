import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
  Alert,
  Platform,
  Image
} from 'react-native';
import { Input } from 'react-native-elements';
import { Dropdown } from 'react-native-element-dropdown';
import { theme } from '../assets/theme';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker';
import { styles } from './styles/signUpStyles';
import { formatDate } from '../components/formatDate';
import * as ImagePicker from 'expo-image-picker';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';


export default function RegisterScreen({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [gender, setGender] = useState<string>('');
  const genders = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
    { label: 'Outro', value: 'outro' },
  ];
  const [permissao, setPermissao] = useState<string>('');
  const permissoes = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Professor', value: 'professor' },
    { label: 'Aluno', value: 'aluno' },
  ];
  const [photoUrl, setPhotoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleAddProfilePhoto = async () => {
    try {
      if (Platform.OS === 'android') {
        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, precisamos da permissão para acessar suas fotos!');
          return;
        }

        const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus !== 'granted') {
          alert('Desculpe, precisamos da permissão para acessar a câmera!');
          return;
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        console.log('Imagem selecionada:', result.assets[0].uri);
        setPhotoUrl(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Erro ao selecionar a foto de perfil:', error);
    }
  };


  const handleRegister = async () => {
    console.log('entrei');

    if (password !== confirmPassword) {
      console.error('As senhas não correspondem.');
      // Aqui você pode exibir um alerta ou uma mensagem de erro para o usuário
      return;
    }

    try {
      const auth = getAuth();
      console.log(auth);
      // Cria o usuário com e-mail e senha
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Referência ao documento do usuário
      const userRef = firestore().collection('users').doc(user.uid);

      // Adiciona dados adicionais em uma subcoleção
      await userRef.collection('data').add({
        username,
        permissao,
        gender,
        profilePhotoUrl: photoUrl
      });

      // Adicção das Refeições defaults para o utilizador

      navigation.navigate('Sign In');
      console.log('Registrado com sucesso');
      // Redirecionar para outra tela, se necessário
    } catch (error) {
      console.error('Erro ao registrar:', error);
      // Você pode adicionar uma mensagem de erro para o usuário aqui
    }
  };

  const _renderItem = (item: {
    label:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };


  // Verifica de todos os dados foram preenchidos

  const isFormValid = () => {
    return (
      username &&
      email &&
      gender &&
      permissao &&
      password == confirmPassword
    );
  };

  const handleRegisto = () => {
    if (isFormValid()) {
      Alert.alert(
        'Os dados estão correctos?',
        'Registar novo utilizador!',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Registar',
            onPress: () => {
              handleRegister()
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      Alert.alert(
        'Atenção',
        'Todos os campos são obrigatórios. Preencha todos os campos antes de adicionar.'
      );
    }
  };


  const renderContent = () => (
    <View style={styles.contentContainer}>
      <TouchableOpacity style={styles.icon}>
        <FontAwesome
          name="arrow-left"
          size={24}
          color={theme.colorDarkBlue}
          onPress={() => navigation.navigate('Sign In')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Adicionar Utilizador</Text>
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImage}>
          {photoUrl ? (<Image source={{ uri: photoUrl }} style={{ width: 150, height: 150, borderRadius: 75 }} />) : (<FontAwesome name="user-circle" size={150} color={theme.colorDarkBlue} />)}
        </View>
        <TouchableOpacity onPress={handleAddProfilePhoto}>
          <View style={styles.photoAdd}>
            <FontAwesome name="camera" size={24} color={theme.colorDarkBlue} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Nome</Text>
      <Input
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Insira o Nome do Utilizador"
        placeholderTextColor="#a3a19e"
        value={username}
        onChangeText={setUsername}
        leftIcon={
          <FontAwesome
            name="user"
            size={24}
            color={theme.colorDarkBlue}
            style={{ marginRight: 5 }}
          />
        }
      />
      <Text style={styles.label}>E-mail</Text>
      <Input
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Insira o seu e-mail"
        placeholderTextColor="#a3a19e"
        value={email}
        onChangeText={setEmail}
        leftIcon={
          <FontAwesome
            name="envelope"
            size={24}
            color={theme.colorDarkBlue}
            style={{ marginRight: 5 }}
          />
        }
      />
      <Text style={styles.label}>Género</Text>
      <View style={styles.dropdownWrapper}>
        <Dropdown
          data={genders}
          value={gender}
          placeholder="Selecione o género"
          placeholderStyle={styles.placeholder}
          style={[styles.dropdown, styles.inputContainer]}
          onChange={(item) => {
            setGender(item.value);
            console.log('selected', item);
          }}
          renderLeftIcon={() => (
            <FontAwesome
              name="venus-mars"
              size={24}
              color={theme.colorDarkBlue}
              style={{ marginRight: 5 }}
            />
          )}
          renderItem={_renderItem}
          labelField={'label'}
          valueField={'value'}
        />
      </View>

      <Text style={styles.label}>
        Tipo de Utilizador
      </Text>
      <View style={styles.dropdownWrapper}>
        <Dropdown
          data={permissoes}
          value={permissao}
          placeholder="Selecione o tipo do novo utilizador"
          placeholderStyle={styles.placeholder}
          style={[styles.dropdown, styles.inputContainer]}
          onChange={(item) => {
            setPermissao(item.value);
            console.log('selected', item);
          }}
          renderLeftIcon={() => (
            <FontAwesome6 name="users-gear" size={24} color={theme.colorDarkBlue} style={{ marginRight: 5 }} />
          )}
          renderItem={_renderItem}
          labelField={'label'}
          valueField={'value'}
        />
      </View>


      <Text style={styles.label}>Password</Text>
      <Input
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Insira a password"
        placeholderTextColor="#a3a19e"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        leftIcon={
          <FontAwesome
            name="lock"
            size={24}
            color={theme.colorDarkBlue}
            style={{ marginRight: 5 }}
          />
        }
      />

      <Text style={styles.label}>Confirmar Password</Text>
      <Input
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholder="Confirmar a password"
        placeholderTextColor="#a3a19e"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        leftIcon={
          <FontAwesome
            name="lock"
            size={24}
            color={theme.colorDarkBlue}
            style={{ marginRight: 5 }}
          />
        }
      />

      <View style={styles.buttonContainer}>
        {/* Sombra deslocada */}
        <View style={styles.shadowLayer} />
        {/* Botão principal */}
        <View style={styles.button}>
          <TouchableOpacity onPress={handleRegisto}
            style={styles.touchable}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Registar</Text>
              <AntDesign name="arrowright" size={20} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={[{ key: 'formContent' }]}
      renderItem={renderContent}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    />
  );
}
