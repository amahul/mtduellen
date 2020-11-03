import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';

import Character from './Character';
import Popup from './Popup';
import Launcher from './Launcher';
import Counter from './Counter';
import background from '../bilder/gameBackground3.png';
import character from '../bilder/test.png';

class Game2 extends Component {
  state = {
    count: 0,
    size: 30,
    secondTimer: false,
    firstModal: true,
    secondModal: false,
    firstTimer: false,
    showLauncher: false,
    velocity: 1.5,
    yPos: 150,
    jumping: false,
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

  jump = () => {
    this.setState({
      velocity: 20,
      jumping: true,
      yPos: this.state.velocity * 5 + 10,
    });
  };

  render() {
    const xPos = 30;
    const gameTimer = 5;
    const gameInstruction = 'Tryck på knappen så många gånger du kan';
    let endText = 'Du fick ' + this.state.count + ' poäng';

    if (this.state.yPos > 150) {
      this.setState({
        jumping: false,
      });
    }

    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <TouchableWithoutFeedback onPress={this.jump}>
          <View style={styles.container}>
            {/* GAME COUNTER */}
            <Text style={styles.text}>{this.state.yPos}</Text>
            <Counter
              seconds={gameTimer}
              running={this.state.secondTimer}
              endGame={this.endGame}
            />

            {/* MINIGAME CONTENT */}

            {/* <Character xPos={xPos} yPos={this.state.yPos}></Character> */}
            <Image
              source={character}
              style={[
                {
                  left: xPos,
                  top: this.state.yPos,
                  resizeMode: 'contain',
                  height: 350,
                  width: 150,
                },
              ]}
            />
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
              <Popup content={endText} button={false} link={true} action="/" />
            )}

            {/* LAUNCHER */}
            {this.state.showLauncher && (
              <Launcher
                running={this.state.firstTimer}
                startGame={this.startGame}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  character: {
    marginTop: 120,
    marginLeft: 30,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Game2;
