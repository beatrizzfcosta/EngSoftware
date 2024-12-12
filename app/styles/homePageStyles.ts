import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme';

export 
const styles = StyleSheet.create({
  container: {
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
    shadowColor: theme.colorDarkBlue,
    shadowOffset: { width: 10, height: 10 }, // Deslocamento horizontal e vertical
    shadowOpacity: 1, // Opacidade da sombra (1 para sólida)
    shadowRadius: 0, // Raio da sombra (0 para bordas nítidas)
    elevation: 4,
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Abril Fatface",
  },
});
