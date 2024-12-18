import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme';
 
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 15,
      paddingTop: 40,
    },
    placeholder:{
        width: 40,
      },
    header:{
        flexDirection:'row',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingBottom:20
      },
      title: {
        fontSize: 35,
        fontWeight: "bold",
        color: theme.colorDarkBlue,
      },
    subHeader: {
      fontSize: 16,
      marginBottom: 10,
      fontWeight: "bold",
    },
    userCard: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colorLightBlue,
      borderWidth: 1,
      borderColor: theme.colorDarkBlue,
      padding: 10,
      marginVertical: 5,
    },
    userInfo: {
      flexDirection: "column",
    },
    userName: {
      fontSize: 16,
      fontWeight: "bold",
      color: 'black',
    },
    userInfoP: {
      fontSize: 14,
      color: "#666",
    },
    addButton: {
      backgroundColor: theme.colorLightBlue,
      padding: 5,
      borderWidth: 1,
      borderColor: theme.colorDarkBlue
    },
    floatingButton: {
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: "#004E66",
      borderRadius: 30,
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      elevation: 0,
    },
    button: {
        width: 20,
        height: 25,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#fff', // Fundo branco do botão
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0, // Sem sombra adicional no botão
      },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      shadowLayer: {
        position: 'absolute',
        width: 32, // Ajuste conforme necessário
        height: 32,
        backgroundColor: '#2E5D6E', // Cor da sombra sólida
        top: 5, // Deslocamento vertical
        left: 5, // Deslocamento horizontal
  
      },
  });