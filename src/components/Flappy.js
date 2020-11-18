import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet, View, Text, LogBox} from 'react-native';
import Entities from './entities';
import {GameEngine} from 'react-native-game-engine';
import Systems from './systems';

class Flappy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
    };
    this.gameEngine = null;
    LogBox.ignoreAllLogs();
  }

  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          running={this.state.running}
          systems={Systems}
          entities={Entities()}></GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Flappy;
