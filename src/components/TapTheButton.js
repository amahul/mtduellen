import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';

import {Link} from 'react-router-native';

import FirstModal from './FirstModal';
import Launcher from './Launcher';
import Counter from './Counter';
import knapp from '../bilder/button2_small.png';
import arrow from '../bilder/arrow_small.png';

import EndModal from './EndModal';

const store = require('./Storage');

const gameTimer = 5;

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
      myData = {activeScore: count, highScore: count};
    } else {
      // save old highScore
      myData = {activeScore: count, highScore: highScore};
    }

    store.saveData(myData);

    setSecondTimer(false);

    setTimeout(() => {
      setSecondModal(true);
    }, 700);
  };

  startLauncher = () => {
    setFirstModal(false);
    setFirstTimer(true);
  };

  useEffect(() => {
    const fetch = async () => {
      let tempScore = await store.readData();
      setHighScore(tempScore.highScore);
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <Link to="/" underlayColor="#13283C">
        <Image source={arrow} style={styles.icon} />
      </Link>
      <View style={styles.counterContainer}>
        {/* GAME COUNTER */}
        {secondTimer && (
          <Counter
            seconds={gameTimer}
            running={secondTimer}
            endGame={endGame}
          />
        )}
      </View>
      {/* MINIGAME CONTENT */}
      <View style={styles.background}>
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
      </View>
      {/* MINIGAME CONTENT END */}

      {/* FIRST MODAL */}
      <FirstModal modalState={firstModal} action={startLauncher} />

      {/* SECOND MODAL */}
      {secondModal && <EndModal points={count} modalState={secondModal} />}

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

  text: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
  },

  background: {
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
