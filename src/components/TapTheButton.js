import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  ImageBackground,
  Image,
} from 'react-native';

import {Link} from 'react-router-native';

import Popup from './Popup';
import Launcher from './Launcher';
import Counter from './Counter';
import knapp from '../bilder/button2.png';
import arrow from '../bilder/arrow.png';
import Modal from 'react-native-modalbox';
import play from '../bilder/play_dark.png';

const store = require('./Storage');

class TapTheButton extends Component {
  state = {
    count: 0,
    size: 150,
    fontSize: 40,
    secondTimer: false,
    firstModal: true,
    secondModal: false,
    firstTimer: false,
    showLauncher: true,
  };

  //const [count, setCount] = useState("0");
  
  onPress = () => {
    // change size of button and add to count
    if (this.state.secondTimer) {
      this.setState({
        count: this.state.count + 1,
        size: this.state.size + 5,
        fontSize: this.state.fontSize + 1,
      });
    }
  };

  startGame = () => {
    console.log('fooo');
    this.setState({
      secondTimer: true,
      showLauncher: false,
      //firstTimer: false,
    });
  };

  endGame = () => {
    store.saveData(this.state.count);

    this.setState({
      secondModal: true,
      secondTimer: false,
    });
  };

  startLauncher = () => {
    this.setState({
      firstModal: false,
      firstTimer: true,
      //showLauncher: true,
    });
  };

  render() {
    const gameTimer = 5;
    const gameInstruction = 'Tryck på knappen så många gånger du kan';
    let endText = 'Du fick ' + this.state.count + ' poäng';

    return (
      <View style={styles.container}>
        <Link to="/">
          <Image source={arrow} style={styles.icon} />
        </Link>
        <View style={styles.counterContainer}>
          {/* GAME COUNTER */}
          {/* {this.state.secondTimer && ( */}
          <Counter
            seconds={gameTimer}
            running={this.state.secondTimer}
            endGame={this.endGame}
          />
          {/* )} */}
        </View>
        {/* MINIGAME CONTENT */}
        <ImageBackground style={styles.image}>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View
              style={{
                width: this.state.size,
                height: this.state.size,
                top: -110,
              }}>
              <ImageBackground
                source={knapp}
                style={(styles.button, styles.container)}>
                <Text
                  style={
                    (styles.text,
                    {
                      fontSize: this.state.fontSize,
                      color: 'white',
                      alignSelf: 'center',
                    })
                  }>
                  {this.state.count}
                </Text>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
        {/* MINIGAME CONTENT END */}
        {/* FIRST MODAL */}
        {/* {this.state.firstModal && ( */}
        <Popup
          content={gameInstruction}
          button={true}
          link={false}
          modalState={this.state.firstModal}
          action={this.startLauncher}
        />
        {/* )} */}
        {/* SECOND MODAL */}

        {/* {this.state.secondModal && ( */}
        {/* <Popup
          content={endText}
          button={false}
          modalState={this.state.secondModal}
          link={true}
          action="/"
        /> */}

        <Modal
          style={styles.modal}
          backdrop={false}
          position={'center'}
          isOpen={this.state.secondModal}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              top: 35,
            }}>
            {endText}
          </Text>

          {/* <Link to="/" underlayColor="#f0f4f7">
            <Text>Nästa spel</Text>
          </Link> */}

          <Link to="/">
            <Image
              source={play}
              style={{width: 250, height: 70, bottom: 0, margin: 5, top: 75}}
            />
          </Link>
        </Modal>

        {/* )} */}
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
    zIndex: 30, // works on ios
    elevation: 30, // works on android
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    color: 'white',
    marginTop: 20,
  },
  counter: {
    alignSelf: 'center',
    flex: 4,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    flex: 2,
  },
  modal: {
    position: 'relative',
    //backgroundColor: 'green',
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
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    paddingTop: 20,
    flex: 4,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#13283C',
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
    margin: 15,
    top: 20,
  },
});

export default TapTheButton;
