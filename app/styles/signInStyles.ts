import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme';
 
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignContent:'center',
      justifyContent:'center'
    },
    header:{
      alignItems:'center'
    },
    title:{
      fontWeight:'bold',
      fontSize:30,
      color:theme.colorDarkBlue
    },
    formContainer:{
      alignItems: 'center',
      justifyContent:'center'
    },
    label: {
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: "Abril Fatface",
      justifyContent: 'flex-start'
    },
    input: {
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      fontSize: 14,
    },
    inputContainer: {
      width: 300,
      paddingLeft: 0,
      paddingRight: 0,
    },
    button: {
      padding: 20,
      alignItems: 'center',
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
    },

    registerText: {
      color: '#000',
      textDecorationLine: 'underline',
      fontFamily: "Abril Fatface",
    },
    errorMessage: {
      color: 'red',
      fontSize: 14,
      alignItems: 'center',
      padding: 10,
      fontFamily: "Abril Fatface",
    },
  });