import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme';
import { Header } from 'react-native-elements';

export const styles = StyleSheet.create({
    container: {
      /* @info Make the containing view fill the screen */
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center', // Centraliza verticalmente
      alignItems: 'center', // Centraliza horizontalmente
      backgroundColor: theme.colorWhite
    },
    header:{
      alignItems:'center'
    },
    title:{
      fontWeight:'bold',
      fontSize:30,
      color:theme.colorDarkBlue
    },
    content: {
      color: theme.colorDarkBlue,
      justifyContent: 'space-between',
      padding: 20,
      alignItems: 'center'
    },
    button: {
      alignItems: 'center',
      display: 'flex',
      padding: 20,
    },
    text: {
      fontSize: 25,
      color: theme.colorDarkBlue,
      marginBottom: 20,
      fontFamily: "Abril Fatface",
      textAlign:'center',
    },
    buttonContent: {
      borderWidth: 3,
      padding: 8,
      display: 'flex',
      flexDirection: 'row',
      shadowColor: theme.colorDarkBlue,
      shadowOffset: { width:-6, height: 6 }, // Deslocamento horizontal e vertical
      shadowOpacity: 1, // Opacidade da sombra (1 para sólida)
      shadowRadius: 0, // Raio da sombra (0 para bordas nítidas)
      elevation: 4, // Sombra para Android
      gap:5
    },
    buttonText:{
      fontWeight:'bold',
      fontFamily: "Abril Fatface",
      fontSize:20
    }
    
  });