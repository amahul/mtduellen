import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import Home from './src/components/Home';
import TapTheButton from './src/components/TapTheButton';
import Game2 from './src/components/Game2';
//import Info from './src/components/Info';
import SoundPlayer from 'react-native-sound-player';
import CatchTheCandy from './src/components/CatchTheCandy';
import Flappy from './src/components/Flappy';

class App extends Component {

  render() {
    
    try {
      // play the file tone.mp3
      SoundPlayer.playSoundFile('loop', 'wav');
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Tap" component={TapTheButton} />
            <Route exact path="/Second" component={Game2} />
            <Route exact path="/Candy" component={CatchTheCandy} />
            <Route exact path="/Flappy" component={Flappy} />

            {/* <Route exact path="/Info" component={Info} /> */}
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
