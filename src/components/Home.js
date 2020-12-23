import React, {useEffect, useState} from 'react';

const store = require('./Storage');

import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import icon from '../bilder/info_dark.png';

import {Link} from 'react-router-native';

import spela from '../bilder/spela_small.png';
import rekord from '../bilder/rekord_small.png';
import logo3 from '../bilder/logo_mtduellen_small.png';

import Info from './Info';

// var FBLoginButton = require('./FBLoginButton');

const Home = ({}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [activeScore, setActiveScore] = useState();
  const [highScore, setHighScore] = useState();

  closeInfo = () => {
    setInfoModal(false);
  };

  openInfo = () => {
    setInfoModal(true);
  };

  useEffect(() => {
    const fetch = async () => {
      let tempScore = await store.readData();
      setActiveScore(tempScore.activeScore);
      setHighScore(tempScore.highScore);
    };
    fetch();
  }, []);

  return (
    <ImageBackground style={styles.imageBackground}>
      {!infoModal && (
        <View style={styles.infoBtnHolder}>
          <TouchableOpacity
            style={styles.infoBtn}
            activeOpacity={0.5}
            onPress={openInfo}
            title="Info">
            <Image source={icon} style={{width: 80, height: 80, margin: 20}} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo3} style={styles.imgFlex} />
        </View>

        {activeScore != '0' ? (
          <View style={styles.scoreBoard}>
            <Image source={rekord} style={styles.recordImage} />
            <Text style={styles.textHighScore}>{highScore}</Text>
            {/* <Text style={styles.text}>Din senaste poäng</Text>
            <Text style={styles.text}>{activeScore}</Text> */}
          </View>
        ) : (
          <View style={styles.scoreBoard}>
            <Text style={styles.text}>Spela för att få ett highscore </Text>
          </View>
        )}

        {/* <FBLoginButton /> */}

        <View style={styles.startBtnHolder}>
          <TouchableOpacity activeOpacity={0.5}>
            <Link to="/Tap" underlayColor="#13283C">
              <Image
                source={spela}
                style={{
                  resizeMode: 'contain',
                  width: 350,
                  //margin: 5,
                }}
              />
            </Link>
          </TouchableOpacity>
        </View>
      </View>
      {/* INFO MODAL */}
      <Info modalState={infoModal} closeInfo={closeInfo} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startBtnHolder: {
    flex: 1,
    //backgroundColor: 'yellow',
    width: '100%',
    alignItems: 'center',
    top: -60,
  },
  startBtn: {
    backgroundColor: '#EC6610',
    width: '50%',
    flex: 0.4,
    padding: 10,
    borderRadius: 10,
  },

  imageBackground: {
    ...StyleSheet.absoluteFill,
    resizeMode: 'cover',
    alignSelf: 'stretch',
    backgroundColor: '#13283C',
  },
  infoBtnHolder: {
    flex: 0.15,
    //flexDirection: 'row',
    //justifyContent: 'flex-end',
    right: 0,
    //backgroundColor: 'pink',
    position: 'absolute',
    zIndex: 11,
    elevation: 11,
  },
  infoBtn: {
    opacity: 0.9,
    padding: 10,
  },
  recordImage: {
    resizeMode: 'contain',
    flex: 0,
    top: 0,
    width: '80%',
  },
  logoContainer: {
    flex: 2,
    marginTop: 80,
    width: '100%',
    alignItems: 'center',
    //backgroundColor: 'green',
    // zIndex: 13,
    // elevation: 13,
  },
  imgFlex: {
    resizeMode: 'contain',
    height: '100%',
    width: '80%',
    maxHeight: '100%',
    top: -30,
  },

  scoreBoard: {
    top: -50,
    flex: 2,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    margin: 2,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 35,
    top: 50,
    //fontFamily: 'serif',
  },
  textHighScore: {
    fontSize: 70,
    top: -50,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;

// -----------------  Färgkoder -------------------- //
// Orange:  #EC6610
// Blå:     #13283C
