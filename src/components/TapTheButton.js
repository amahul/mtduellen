import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';

import {Link} from 'react-router-native';

import Popup from './Popup';
import Launcher from './Launcher';
import Counter from './Counter';
import background from '../bilder/homeBackground.png';
import knapp from '../bilder/button2.png';
import arrow from '../bilder/arrow.png';
<<<<<<< HEAD
=======
import Modal from 'react-native-modalbox';

const store = require('./Storage');
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095

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
    this.setState({
      secondTimer: true,
      showLauncher: false,
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
      showLauncher: true,
    });
  };

  render() {
    const gameTimer = 50;
    const gameInstruction = 'Tryck på knappen så många gånger du kan';
    let endText = 'Du fick ' + this.state.count + ' poäng';

    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <View style={styles.counterContainer}>
          <Link to="/">
            <Image source={arrow} style={styles.icon} />
          </Link>

          {/* GAME COUNTER */}
          <View style={(styles.counter, {justifyContent: 'center'})}>
            {this.state.secondTimer && (
              <Counter
                seconds={gameTimer}
                running={this.state.secondTimer}
                endGame={this.endGame}
              />
            )}
          </View>
=======
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
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
        </View>
        {/* MINIGAME CONTENT */}
        <ImageBackground style={styles.image}>
          <TouchableWithoutFeedback onPress={this.onPress}>
<<<<<<< HEAD
            <View style={{width: this.state.size, height: this.state.size}}>
=======
            <View
              style={{
                width: this.state.size,
                height: this.state.size,
                top: -110,
              }}>
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
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
<<<<<<< HEAD
        <Popup
=======
        {/* <Popup
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
          content={endText}
          button={false}
          modalState={this.state.secondModal}
          link={true}
          action="/"
<<<<<<< HEAD
        />
=======
        /> */}

        <Modal
          style={styles.modal}
          backdrop={false}
          position={'center'}
          isOpen={this.state.secondModal}>
          <Text>{endText}</Text>

          <Link to="/" underlayColor="#f0f4f7">
            <Text>Nästa spel</Text>
          </Link>
        </Modal>

>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
        {/* )} */}
        {/* LAUNCHER */}
        {this.state.showLauncher ? (
          <Launcher
            running={this.state.firstTimer}
            startGame={this.startGame}
          />
        ) : null}
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
<<<<<<< HEAD
    width: '100%',
    backgroundColor: '#13283C',
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    color: 'white',
=======
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
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
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
    backgroundColor: 'green',
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
<<<<<<< HEAD
=======
    top: 20,
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
  },
});

export default TapTheButton;
