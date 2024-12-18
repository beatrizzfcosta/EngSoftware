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
    text: {
      fontSize: 25,
      color: theme.colorDarkBlue,
      marginBottom: 20,
      fontFamily: "Abril Fatface",
      textAlign:'center',
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
  });