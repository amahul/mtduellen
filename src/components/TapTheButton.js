import React, {useEffect, useState} from 'react';
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
//import play from '../bilder/play_dark.png';
import avsluta from '../bilder/avsluta.png';
import braJobbat from '../bilder/braJobbat.png';

import spelregler from '../bilder/spelregler.png';
import {BorderlessButton} from 'react-native-gesture-handler';

const store = require('./Storage');

const gameTimer = 5;
const gameInstruction = 'Tryck på knappen så många gånger du kan';

const TapTheButton = ({}) => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(150);
  const [firstTimer, setFirstTimer] = useState(false);
  const [secondTimer, setSecondTimer] = useState(false);

  const [firstModal, setFirstModal] = useState(true);
  const [secondModal, setSecondModal] = useState(false);

  const [showLauncher, setShowLauncher] = useState(true);
  //const [activeScore, setActiveScore] = useState('0');
  const [highScore, setHighScore] = useState('0');

  onPress = () => {
    // change size of button and add to count
    if (secondTimer) {
      setCount(count + 1);
      setSize(size + 5);
    }
  };

  startGame = () => {
    setSecondTimer(true);
    setShowLauncher(false);
  };

  endGame = () => {
    let myData = null;

    // Save first score, or when new highscore
    if (highScore === undefined || count > highScore) {
      console.log('Save new highScore');
      myData = {activeScore: count, highScore: count};
    } else {
      // save old highScore
      console.log('Save old highScore');
      myData = {activeScore: count, highScore: highScore};
    }

    store.saveData(myData);

    setSecondModal(true);
    setSecondTimer(false);
  };

  startLauncher = () => {
    setFirstModal(false);
    setFirstTimer(true);
  };

  useEffect(() => {
    const fetch = async () => {
      let tempScore = await store.readData();
      setHighScore(tempScore.highScore);
      console.log(tempScore.highScore);
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <Link to="/">
        <Image source={arrow} style={styles.icon} />
      </Link>
      <View style={styles.counterContainer}>
        {/* GAME COUNTER */}
        {/* {this.state.secondTimer && ( */}
        <Counter seconds={gameTimer} running={secondTimer} endGame={endGame} />
        {/* )} */}
      </View>
      {/* MINIGAME CONTENT */}
      <ImageBackground style={styles.image}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View
            style={{
              width: size,
              height: size,
              top: -110,
            }}>
            <ImageBackground
              source={knapp}
              style={(styles.button, styles.container)}>
              <Text
                style={
                  (styles.text,
                  {
                    fontSize: count + 40,
                    color: 'white',
                    alignSelf: 'center',
                  })
                }>
                {count}
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
        modalState={firstModal}
        action={startLauncher}
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
        isOpen={secondModal}>
        <Image
          source={braJobbat}
          style={{
            resizeMode: 'contain',
            width: 200,
            alignItems: 'flex-start',
            height: 70,
            bottom: 0,
            margin: 5,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            top: 23,
          }}>
          Du fick {count} poäng!
        </Text>

        {/* <Link to="/" underlayColor="#f0f4f7">
            <Text>Nästa spel</Text>
          </Link> */}

        <Link to="/">
          <Image
            source={avsluta}
            style={{width: 250, height: 70, bottom: 0, margin: 5, top: 55}}
          />
        </Link>
      </Modal>

      {/* LAUNCHER */}
      {showLauncher && <Launcher running={firstTimer} startGame={startGame} />}
    </View>
  );
};

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