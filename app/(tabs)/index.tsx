import { Image, StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (
    <View style={[styles.container,{paddingTop: 60}]}>
      <Text style={{fontSize: 24}}>Seja bem vindo ao Manhattan Cafe!</Text>
    <View style={[styles.Center,{marginTop: 12}]}>
        <Image 
          source={{uri: 'https://i.pinimg.com/originals/8c/65/45/8c65456b5bba6e9800a79cb52ff921bd.gif'}}
          style={styles.logo}/>
        <Text style={{fontSize: 16, marginTop: 15}}>Va em "Cardapio" para conferir nossos produtos</Text>
    </View>
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

  logo: {
    width: 200,
    height: 200,
  },

  Center: {
    flex: 1,
    alignItems: 'center',
  },

});
