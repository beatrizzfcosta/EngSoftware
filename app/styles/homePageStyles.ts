import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme';

export 
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems:'center',
    alignContent:'center',
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
    fontFamily: "Abril Fatface",
    color: theme.colorDarkBlue,
  },
  icon:{
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: theme.colorLightBlue,
    borderRadius: 30,
    borderWidth: 3,
    padding: 20,
    margin: 10,
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    elevation: 0, // Sem sombra adicional no botão
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10, // Para evitar sobreposição
    position: "relative", // Necessário para o posicionamento absoluto da sombra
  },
  shadowLayer: {
    position: "absolute",
    width: 150,
    height: 150,
    backgroundColor: theme.colorDarkBlue,
    borderRadius: 30, // Deve ser igual ao do botão
    top: 20,
    left: 20,
    zIndex: 0, // Garante que fique atrás do botão
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Abril Fatface",
  },
  
  errorText:{
    color:'red'
  }
});
