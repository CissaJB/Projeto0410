import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cartas from './componentes';

export default function App() {

const carta = [
  {
    item: 'Espada da Glória',
    descricao: 'Uma espada ancestral com Poderes de Ataque nível 6, quando carregada com mágia poder nível 8,',
    imgUrl:"https://3.bp.blogspot.com/-U7GkZ8wPN64/WYzyJhdV7ZI/AAAAAAAABjg/CUKpyxOID-cR4gA3I_LWRw7ad9xNDDQvQCLcBGAs/s640/bloodsinger_by_leesmith.jpg",
  },
  {
    item: 'Poção de Cura',
    descricao: 'Essa poção contém poderes curativos, a pessoa que a toma regenera toda a sua vida',
    imgUrl:"https://jogaod20com.files.wordpress.com/2020/09/como-produzir-pocoes-de-cura-dd-5e.jpeg",
  },
  {
    item: 'Poção da Imortalidade',
    descricao: 'Uma poção que te deixará imortal (Por um determinado período de tempo), uso de 10min',
    imgUrl:"https://1.bp.blogspot.com/-hNAbUCFU3Cc/WY45KaCIvRI/AAAAAAAABnQ/_BqN8ffqRSsqfBVJgz_g54utnM4qhE9WwCLcBGAs/s640/ee9794d39f27f465fdc31dabd6cc2a13.jpg",
  },
 
] 

  return (
    <View style={styles.container}>
     {carta.map(c => <Cartas carta={c}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
