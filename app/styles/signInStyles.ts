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
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadowLayer: {
      position: 'absolute',
      width: 220, // Ajuste conforme necessário
      height: 55,
      backgroundColor: '#2E5D6E', // Cor da sombra sólida
      top: 8, // Deslocamento vertical
      left: 8, // Deslocamento horizontal

    },
    button: {
      width: 220,
      height: 55,
      borderWidth: 2,
      borderColor: '#000',
      backgroundColor: '#fff', // Fundo branco do botão
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 0, // Sem sombra adicional no botão
    },
    touchable: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
      gap:5
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    registerText: {
      marginTop:30,
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