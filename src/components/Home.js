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
import play from '../bilder/play_dark.png';

import Info from './Info';
import {greaterThan} from 'react-native-reanimated';

const information =
  'Välkommen till MT-Duellen! Tävla i appen och vinn fina priser på mässdagen. Det är endast MT-studenter som kan delta i tävlingen';

const Home = ({}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [activeScore, setActiveScore] = useState('0');

  closeInfo = () => {
    setInfoModal(false);
  };

  openInfo = () => {
    setInfoModal(true);
  };

  useEffect(() => {
    const fetch = async () => {
      let tempScore = await store.readData();
      setActiveScore(tempScore);
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
          <Image
            source={icon}
            style={{width: 70, height: 70, bottom: 0, margin: 30}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo2} style={styles.imgFlex} />
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
            <Text style={styles.text}>Slå ditt rekord: </Text>
            <Text style={styles.text}>{activeScore}</Text>
          </View>
        ) : (
          <View style={styles.scoreBoard}>
            <Text style={styles.text}>Spela för att få ett highscore </Text>
          </View>
        )}

        <TouchableOpacity style={{bottom: 40}} activeOpacity={0.5}>
          <Link to="/Tap">
            <Image
              source={play}
              style={{width: 300, height: 70, bottom: 0, margin: 5}}
            />
          </Link>
        </TouchableOpacity>

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
    flex: 3,
    alignItems: 'center',
    //alignSelf: 'stretch',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'stretch',
    backgroundColor: '#13283C',
  },
  infoBtnHolder: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  infoBtn: {
    padding: 0,
    opacity: 0.9,
    zIndex: 1,
    elevation: 1,
  },
  logoContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  imgFlex: {
    resizeMode: 'contain',
    width: '80%',
    maxHeight: '100%',
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
    flex: 2,
  },
  text: {
    padding: 15,
    margin: 5,
    //top: 200,
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 40,
    fontWeight: 'bold',
    //color: '#13283C',
    color: 'white',
    lineHeight: 50,
    //fontFamily: 'serif',
  },
});

export default Home;

// -----------------  Färgkoder -------------------- //
// Orange:  #EC6610
// Blå:     #13283C
