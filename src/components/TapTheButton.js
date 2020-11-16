import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {Link} from 'react-router-native';

import Popup from './Popup';
import Launcher from './Launcher';
import Counter from './Counter';
import arrow from '../bilder/arrow.png';

class TapTheButton extends Component {
  state = {
    count: 0,
    size: 30,
    secondTimer: false,
    firstModal: true,
    secondModal: false,
    firstTimer: false,
    showLauncher: false,
  };

  onPress = () => {
    // change size of button and add to count
    if (this.state.secondTimer) {
      this.setState({
        count: this.state.count + 1,
        size: this.state.size + 2,
      });
    }
  };

  startGame = () => {
    this.setState({
      secondTimer: true,
      showLauncher: false,
    });
  };

  endGame = () => {
    this.setState({
      secondModal: true,
      secondTimer: false,
    });
  };

  startLauncher = () => {
    this.setState({
      firstModal: false,
      firstTimer: true,
      showLauncher: true,
    });
  };

  render() {
    const gameTimer = 5;
    const gameInstruction = 'Tryck på knappen så många gånger du kan';
    let endText = 'Du fick ' + this.state.count + ' poäng';
    return (
      <View style={styles.container}>
        {/* GAME COUNTER */}
        {this.state.secondTimer && (
          <Counter
            seconds={gameTimer}
            running={this.state.secondTimer}
            endGame={this.endGame}
          />
        )}

        {/* MINIGAME CONTENT */}
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.button} padding={this.state.size}>
            <Text style={styles.text}>{this.state.count}</Text>
          </View>
        </TouchableWithoutFeedback>

        <View source={arrow}>
          <Link to="/Tap"></Link>
        </View>
        {/* MINIGAME CONTENT END */}

        {/* FIRST MODAL */}
        {this.state.firstModal && (
          <Popup
            content={gameInstruction}
            button={true}
            link={false}
            action={this.startLauncher}
          />
        )}

        {/* SECOND MODAL */}
        {this.state.secondModal && (
          <Popup
            content={endText}
            button={false}
            link={true}
            action="/Second"
          />
        )}

        {/* LAUNCHER */}
        {this.state.showLauncher && (
          <Launcher
            running={this.state.firstTimer}
            startGame={this.startGame}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'whitesmoke',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 20,
  },
  modal: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 300,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },

  text: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default TapTheButton;
