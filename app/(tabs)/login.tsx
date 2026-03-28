import { StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (

    <View style={styles.Background}>
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create ({
    Background: {
        backgroundColor: "#fff",
        flex: 1,
    },

    titulo : {
        color: "#000",
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',

    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
});