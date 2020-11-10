import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import React, {Component} from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';

import Home from './src/components/Home';
import TapTheButton from './src/components/TapTheButton';
import Game2 from './src/components/Game2';
//import SoundPlayer from 'react-native-sound-player';

class App extends Component {
  render() {
    // try {
    //   // play the file tone.mp3
    //   SoundPlayer.playSoundFile('loop', 'wav');
    // } catch (e) {
    //   console.log(`cannot play the sound file`, e);
    // }
    return (
      <NativeRouter>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Tap" component={TapTheButton} />
            <Route exact path="/Second" component={Game2} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

// export default function App () {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style='auto' />
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App