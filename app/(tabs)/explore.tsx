import { StyleSheet, Text, View } from 'react-native';

export default function Main() {

  const cafes = [
    { nome: 'Espresso', preco: 6.0 },
    { nome: 'Cappuccino', preco: 10.0 },
    { nome: 'Latte', preco: 9.5 },
    { nome: 'Mocha', preco: 11.0 },
    { nome: 'Americano', preco: 7.0 },
  ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Cardápio ☕</Text>

      {cafes.map((cafe, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.nome}>{cafe.nome}</Text>
          <Text style={styles.preco}>R$ {cafe.preco.toFixed(2)}</Text>
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  nome: {
    color: '#fff',
    fontSize: 18,
  },
  preco: {
    color: '#aaa',
    fontSize: 18,
  },
});