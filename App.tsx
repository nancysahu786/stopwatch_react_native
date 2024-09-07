import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TimerComponent } from './src/Components/timer';
import { useEffect } from 'react';

export default function App() {
  const state = {
    remainingSeconds: 5,
    isRunning: false,
    selectedMinutes: "0",
    selectedSeconds: "5"
  }

  const Stop = () => {

  }
  const Start = () => {

  }
  const renderPicker = () => {

  }

  return (
    <View style={styles.container}>
      {/* <TimerComponent /> */}
      <StatusBar style="auto"/>
      {
        state.isRunning ? (
          <Text style={{color:'white'}}>kkk</Text>
        )
          : (renderPicker())
      }
      {
        state.isRunning ? (
          <TouchableOpacity onPress={() => Stop()}>
            <Text>Stop</Text>
          </TouchableOpacity>
        )
          : (<TouchableOpacity onPress={() => Start()}>
            <Text>Start</Text>
          </TouchableOpacity>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',


  },
});
