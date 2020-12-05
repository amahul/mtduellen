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

import logo2 from '../bilder/logo_alt2.png';
import highscores from '../bilder/highscore_dark.png';
import highscoresExpanded from '../bilder/highscores_expanded.png';
import spela from '../bilder/spela.png';
import rekord from '../bilder/rekord.png';
import logo3 from '../bilder/logo_mtduellen.png';

import Info from './Info';
import {greaterThan} from 'react-native-reanimated';

const information =
  'Välkommen till MT-Duellen! Tävla i appen och vinn fina priser på mässdagen. Det är endast MT-studenter som kan delta i tävlingen';

const Home = ({}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [activeScore, setActiveScore] = useState('0');
  const [highScore, setHighScore] = useState('0');

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
      <View style={styles.infoBtnHolder}>
        <TouchableOpacity
          style={styles.infoBtn}
          activeOpacity={0.5}
          onPress={openInfo}
          title="Info">
          <Image source={icon} style={{width: 80, height: 80, margin: 20}} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo3} style={styles.imgFlex} />
        </View>
        {/* <View style={styles.imgFlex2}>
          {/* <Image
            source={highscoresExpanded}
            style={{
              resizeMode: 'stretch',
              width: 400,
              height: 400,
              margin: 5,
            }}
          /> 
          
        </View> */}
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

        {/* INFO MODAL */}
        <Info
          information={information}
          modalState={infoModal}
          closeInfo={closeInfo}
        />
      </View>
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
  imageBackground: {
    ...StyleSheet.absoluteFill,
    resizeMode: 'cover',
    alignSelf: 'stretch',
    backgroundColor: '#13283C',
  },
  infoBtnHolder: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    //backgroundColor: 'pink',
    // zIndex: 11,
    // elevation: 11,
  },
  infoBtn: {
    opacity: 0.9,
  },
  recordImage: {
    resizeMode: 'contain',
    flex: 0,
    top: 0,
    width: '80%',
  },
  logoContainer: {
    flex: 2,
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
  // imgFlex2: {
  //   resizeMode: 'contain',
  //   flex: 3,
  //   flexDirection: 'column',
  //   width: 300,
  //   padding: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // backgroundColor: 'blue',
  // },
  scoreBoard: {
    top: -50,
    flex: 2,
    alignItems: 'center',
    width: '100%',
    //backgroundColor: 'red',
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
