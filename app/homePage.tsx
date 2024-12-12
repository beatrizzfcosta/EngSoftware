import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, FlatList } from "react-native";
import { theme } from '../assets/theme';
import { styles } from './styles/homePageStyles';

type UserType = "aluno" | "professor" | "administrador";

type Option = {
  id: string;
  label: string;
  icon: string; // Aqui você pode incluir um caminho para um ícone, caso necessário
  onPress: () => void;
};
export default function HomeScreen({ navigation }: { navigation: any }) {
  const userType: UserType = "professor"

  const getOptions = (): Option[] => {
    switch (userType) {
      case "aluno":
        return [
          {
            id: "1",
            label: "Meu Horário",
            icon: "calendar", // Nome do ícone do Ionicons
            onPress: () => Alert.alert("Meu Horário", "Você abriu o Meu Horário!"),
          },
          {
            id: "2",
            label: "Notas",
            icon: "id-card-outline",
            onPress: () => Alert.alert("Notas", "Você abriu as Notas!"),
          },
          {
            id: "3",
            label: "Mensagens",
            icon: "chatbubble",
            onPress: () => Alert.alert("Mensagens", "Você abriu as Mensagens!"),
          },
        ];
      case "professor":
        return [
          {
            id: "1",
            label: "Meu Horário",
            icon: "calendar",
            onPress: () => Alert.alert("Meu Horário", "Você abriu o Meu Horário!"),
          },
          {
            id: "2",
            label: "Mensagens",
            icon: "chatbubble",
            onPress: () => Alert.alert("Mensagens", "Você abriu as Mensagens!"),
          },
          {
            id: "3",
            label: "Turmas",
            icon: "list",
            onPress: () => Alert.alert("Turmas", "Você abriu as Turmas!"),
          },
        ];
      case "administrador":
        return [
          {
            id: "1",
            label: "User List",
            icon: "people",
            onPress: () => Alert.alert("User List", "Você abriu a lista de utilizadores!"),
          },
          {
            id: "2",
            label: "Turmas",
            icon: "list",
            onPress: () => Alert.alert("Turmas", "Você abriu as Turmas!"),
          },
          {
            id: "3",
            label: "Mensagens",
            icon: "chatbubble",
            onPress: () => Alert.alert("Mensagens", "Você abriu as Mensagens!"),
          },
          {
            id: "4",
            label: "Adicionar Utilizador",
            icon: "person-add",
            onPress: () => Alert.alert("Adicionar Utilizador", "Você abriu a tela para adicionar utilizadores!"),
          },
        ];
      default:
        return [];
    }
  };

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
          <TouchableOpacity style={styles.button} onPress={item.onPress}>
            <Ionicons name={item.icon} size={55} color="black" style={styles.icon}/>
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
}

