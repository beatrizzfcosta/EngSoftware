import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList, ActivityIndicator } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { theme } from '../assets/theme';
import { styles } from './styles/homePageStyles';
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

type UserType = "aluno" | "professor" | "admin";

type Option = {
  id: string;
  label: string;
  icon: string;
  onPress: () => void;
};

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        console.log("Iniciando fetchUserType...");
        const user = auth().currentUser;
        if (!user) throw new Error("Utilizador não autenticado");
  
        console.log("UID do utilizador:", user.uid);
        const userId = user.uid;
        const userRef = firestore().collection("users").doc(userId);
        const dataCollection = await userRef.collection("data").get();
  
        console.log("Coleção dataCollection:", dataCollection.docs);
  
        if (!dataCollection.empty) {
          const userData = dataCollection.docs[0].data();
          console.log("Dados do utilizador encontrados:", userData);
          setUserType(userData.permissao as UserType);
        } else {
          console.error("Nenhum dado encontrado para este utilizador.");
        }
      } catch (error) {
        console.error("Erro ao buscar tipo de utilizador:", error);
      } finally {
        console.log("Finalizando fetchUserType, setando loading para false.");
        setLoading(false);
      }
    };
  
    fetchUserType();
  }, []);
  

  const getOptions = (): Option[] => {
    switch (userType) {
      case "aluno":
        return [
          { id: "1", label: "Meu Horário", icon: "calendar", onPress: () => Alert.alert("Meu Horário", "Você abriu o Meu Horário!") },
          { id: "2", label: "Notas", icon: "id-card-outline", onPress: () => Alert.alert("Notas", "Você abriu as Notas!") },
          { id: "3", label: "Mensagens", icon: "chatbubble", onPress: () => Alert.alert("Mensagens", "Você abriu as Mensagens!") },
        ];
      case "professor":
        return [
          { id: "1", label: "Meu Horário", icon: "calendar", onPress: () => Alert.alert("Meu Horário", "Você abriu o Meu Horário!") },
          { id: "2", label: "Mensagens", icon: "chatbubble", onPress: () => Alert.alert("Mensagens", "Você abriu as Mensagens!") },
          { id: "3", label: "Turmas", icon: "list", onPress: () => Alert.alert("Turmas", "Você abriu as Turmas!") },
        ];
      case "admin":
        return [
          { id: "1", label: "User List", icon: "people", onPress: () => navigation.navigate('User Li')},
          { id: "2", label: "Turmas", icon: "list", onPress: () => Alert.alert("Turmas", "Você abriu as Turmas!") },
          { id: "3", label: "Mensagens", icon: "chatbubble", onPress: () => Alert.alert("Mensagens", "Você abriu as Mensagens!") },
          { id: "4", label: "Adicionar Utilizador", icon: "person-add", onPress: () => navigation.navigate('Sign Up')},
        ];
      default:
        return [];
    }
  };

  if (loading) {
    console.log("Estado atual de loading:", loading);
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colorDarkBlue} />
      </View>
    );
  }
  

  if (!userType) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: Tipo de utilizador não encontrado</Text>
      </View>
    );
  }

  console.log("Renderizando opções para userType:", userType);
  const options = getOptions();


  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.placeholder} />
        <Text style={styles.title}>HOME</Text>
        <TouchableOpacity>
          <FontAwesome
            name="user-circle"
            size={40}
            color={theme.colorDarkBlue}
          />
        </TouchableOpacity>
      </View>
      <FlatList
  data={options}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.buttonContainer}>
      {/* Sombra sólida */}
      <View style={styles.shadowLayer} />
      
      {/* Botão principal */}
      <TouchableOpacity style={styles.button} onPress={item.onPress}>
        <Ionicons name={item.icon} size={55} color="black" style={styles.icon} />
        <Text style={styles.buttonText}>{item.label}</Text>
      </TouchableOpacity>
    </View>
  )}
  numColumns={2}
/>


    </View>
  );
}
