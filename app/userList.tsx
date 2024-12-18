import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles/userListStyle";
import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';


export default function ({ navigation }: { navigation: any }) {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const fetchUsers = async () => {
        try {
          console.log("Buscando utilizadores na coleção 'users' e subcoleção 'data'...");
    
          // Força o Firestore a buscar dados do servidor
          const snapshot = await firestore()
            .collection("users")
            .get({ source: 'server' });
    
          if (snapshot.empty) {
            console.warn("Nenhum documento encontrado na coleção 'users'.");
            return;
          }
    
          const userList: any[] = [];
          for (const userDoc of snapshot.docs) {
            console.log(`Documento encontrado: ${userDoc.id}`);
    
            // Acessa a subcoleção 'data' de cada utilizador
            const dataSnapshot = await firestore()
              .collection("users")
              .doc(userDoc.id)
              .collection("data")
              .get({ source: 'server' });
    
            if (!dataSnapshot.empty) {
              dataSnapshot.forEach((dataDoc) => {
                const data = dataDoc.data();
                console.log(`Dados da subcoleção 'data' para ${userDoc.id}:`, data);
    
                userList.push({
                  id: userDoc.id,
                  username: data.username || "Nome não disponível",
                  permissao: data.permissao || "Tipo não disponível",
                });
              });
            } else {
              console.warn(`Subcoleção 'data' vazia para o documento: ${userDoc.id}`);
            }
          }
    
          setUsers(userList);
          console.log("Usuários carregados:", userList);
        } catch (error) {
          console.error("Erro ao buscar utilizadores:", error);
        }
      };
    
      fetchUsers();
    }, []);
    
      
    const handleAddInfo = (userName: string) => {
        Alert.alert("Adicionar Info", `Abrir tela de edição`)
    };

    const handleAddButton = () => {
        Alert.alert("Adicionar Utilizador", "Abrir tela para adicionar novo utilizador");
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.placeholder} />
                <Text style={styles.title}>LISTAGEM</Text>
                <Ionicons name="close" size={24} color="black" onPress={() => navigation.navigate('User Li')} />
            </View>

            {/* Subtítulo */}
            <Text style={styles.subHeader}>Listagem dos alunos:</Text>

            {/* Lista de utilizadores */}
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userCard}>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text style={styles.userInfoP }>Tipo: {item.permissao}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                {/* Sombra deslocada */}
                <View style={styles.shadowLayer} />
                {/* Botão principal */}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleAddInfo(item.name)}
                        >
                            <Ionicons name="add" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                    </View>
                )}
            />
                <TouchableOpacity style={styles.floatingButton} onPress={handleAddButton}>
                    <Ionicons name="add" size={30} color="#fff" />
                </TouchableOpacity>
           
        </View>
    );
}
