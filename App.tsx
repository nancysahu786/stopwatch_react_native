import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TimerComponent }from './src/Components/timer';

export default function App() {
  return (
    <View style={styles.container}>
      <TimerComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  
  },
});
