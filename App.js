import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import Home from './src/components/Home';
import TapTheButton from './src/components/TapTheButton';
 import Game2 from './src/components/Flappy';
//import Info from './src/components/Info';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
