import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Item from './TradeCards';

export default function Cards() {

  const cards = [
    {
      title: 'Espada de Paladino',
      desc: 'Espada forjada por anjos sombrios e afiada por elfos mágicos. Corta os inimigos como se fossem feitos de granito, afinal elfos não são bons afiadores.',
      power: '15 pontos de ataque',
      type: 'Combate corporal',
      raridade: 'Ultra Rara',
      imgLink: 'https://i.pinimg.com/originals/87/42/41/87424192b131b5da8d0f7dce2d43437b.jpg',
    },
    {
      title: 'Arco e Flecha de Globin',
      desc: 'Arco feito de ferro bruto, minerado diretamente dos campos de trabalho forçado. As flechas foram saquedas de alguma das mil casas do duque.',
      power: '5 pontos de ataque',
      type: 'Combate à distância',
      raridade: 'Incomum',
      imgLink: 'https://pm1.narvii.com/6934/debbf90d007f20a3f4ddf6eb5704c64a9952c4fcr1-949-1920v2_uhq.jpg',
    },
    {
      title: 'Machado de Bárbaro',
      desc: 'O cabo de machado é oriundo da madeira mais pura do leste do continente. A cabeça é o resultando da forja de uma pata de Dragão com Obsidiana. Pelo menos é o que o ferreiro diz...',
      power: '25 pontos de ataque',
      type: 'Combate corporal',
      raridade: 'Lendária',
      imgLink: 'https://i.pinimg.com/236x/d3/b9/4f/d3b94ff4ca9139bac164b25bc053dc25.jpg',
    },
  ]

  return (
    <View style={styles.container}>  
      <Text style={styles.titlePage}>My Colection</Text>
      {cards.map(carta => <Item key={carta.title} item={carta}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'black',
  },
  titlePage: {
    fontSize:'26px',
    textAlign:'center',
    fontWeight:'bold',
    paddingTop:5,
    color:'orange',
  }
});