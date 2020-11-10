import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Animated,
  Easing,
  Button,
} from 'react-native';

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
    velocity: 0,
    yPos: 150 + 200,
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

  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  animate = () => {
    if (this.state.secondTimer && this.state.jumping == false) {
      this.setState({
        jumping: true,
      });
      this.animatedValue.setValue(0);
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start(() =>
        this.setState({
          jumping: false,
        }),
      );
    }
  };

  render() {
    const gameTimer = 50;
    const gameInstruction = 'Tryck på knappen så många gånger du kan';
    let endText = 'Du fick ' + this.state.count + ' poäng';

    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -150, 0],
    });

    return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <TouchableWithoutFeedback onPress={() => this.animate()}>
          <View style={styles.container}>
            {/* GAME COUNTER */}
            <Counter
              seconds={gameTimer}
              running={this.state.secondTimer}
              endGame={this.endGame}
            />

            {/* MINIGAME CONTENT */}

            <Animated.View
              style={{
                marginTop: movingMargin,
                height: 250,
                width: 100,
                left: 40,
                top: 150,
                backgroundColor: 'orange',
              }}>
              {/* <Image
                source={character}
                style={[
                  {
                    left: xPos,
                    top: 0,
                    resizeMode: 'contain',
                    height: 350,
                    width: 150,
                  },
                ]}
              /> */}
            </Animated.View>

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
