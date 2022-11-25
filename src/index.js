import { StyleSheet, View } from 'react-native';
import { Header } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.title} title="Juguemos"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
