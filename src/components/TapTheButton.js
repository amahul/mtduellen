import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground, Image} from 'react-native';

import {Link} from 'react-router-native';

import Popup from './Popup';
import Launcher from './Launcher';
import Counter from './Counter';
import background from '../bilder/homeBackground.png';
import knapp from '../bilder/button2.png';
import arrow from '../bilder/arrow.png';

class TapTheButton extends Component {
  state = {
    count: 0,
    size: 150,
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
        size: this.state.size + 5,
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
    const gameTimer = 50;
    const gameInstruction = 'Tryck på knappen så många gånger du kan';
    let endText = 'Du fick ' + this.state.count + ' poäng';
    return (
      <View style={styles.container}>
        {/* Back arrow */}
        <View style={styles.counterContainer}>
          <Link to="/">
            <Image source={arrow} style={styles.icon}/>
          </Link>

          {/* GAME COUNTER */}
        {this.state.secondTimer && (
          <Counter
            seconds={gameTimer}
            running={this.state.secondTimer}
            endGame={this.endGame}
          />
        )}
        </View>

        

        {/* MINIGAME CONTENT */}
        <ImageBackground  style={styles.image}>

        <TouchableWithoutFeedback onPress={this.onPress}>
          <View  style={{ width:this.state.size,
                          height:this.state.size}}>
            <ImageBackground source={knapp} style={styles.button, styles.container}>
            <Text style={styles.text, {height: this.state.size}}>{this.state.count}</Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
    
        </ImageBackground>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#13283C',
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    flex: 2,
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
    color: 'white',
    justifyContent: 'center',
  },
  image: {
    paddingTop: 20,
    flex: 4,
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#13283C',
  },
  icon: {
    width:50,
    height: 50,
    justifyContent: 'flex-end',
    margin: 15,
  }
});

export default TapTheButton;
