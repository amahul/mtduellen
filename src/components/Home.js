import React, {Component} from 'react';

// import './Storage.js';
// const store = require('./Storage'); // Ska dessa vara kvar?

import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import icon from '../bilder/info_dark.png';

import {Link} from 'react-router-native';

import logo2 from '../bilder/logo_alt2.png';
import highscores from '../bilder/highscore_dark.png';
import highscoresExpanded from '../bilder/highscores_expanded.png';
import play from '../bilder/play_dark.png';

import Info from './Info';
const information = 'Välkommen till MT-Duellen! Tävla i appen och vinn fina priser på mässdagen. Det är endast MT-studenter som kan delta i tävlingen';

class Home extends Component {
  state = {
    infoModal: false,
  };

  openInfo = () => {
    if (!this.state.infoModal) {
      this.setState({
        infoModal: true,
      });
    }
  };

  closeInfo = () => {
    if (this.state.infoModal) {
      this.setState({
        infoModal: false,
      });
    }
  };

  render() {
    let activeScore = store.readData();

    return (
      <ImageBackground style={styles.imageBackground}>
        <View style={styles.infoBtnHolder}>
          <TouchableOpacity
            style={styles.infoBtn}
            activeOpacity={0.5}
            onPress={this.openInfo}
            //style={styles.infoBtn}
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
          <View style={styles.imgFlex2}>
            <Image
              source={highscoresExpanded}
              style={{
                resizeMode: 'stretch',
                width: 400,
                height: 400,
                margin: 5,
              }}
            />
            
          </View>

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
            modalState={this.state.infoModal}
            closeInfo={this.closeInfo}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    alignSelf: 'stretch',
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
    zIndex: 1
  },
  logoContainer: {
    // top: 80,
    // height: 100,
    // flex: 1,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    // marginTop: 50
  },
  img: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  imgFlex: {
    resizeMode: 'contain',
    width: 300,
    margin: 10,
    // backgroundColor: 'green',
    
  },
  imgFlex2: {
    resizeMode: 'contain',
    flex: 3,
    flexDirection: 'column',
    width: 300,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  logo: {
    width: 255,
    height: 190,
    top: 10,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    padding: 15,
    margin: 5,
    top: 200,
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#13283C',
    lineHeight: 50,
    fontFamily: 'serif',
    //fontFamily: 'Helvetica Bold',
  },
});

export default Home;

// -----------------  Färgkoder -------------------- //
// Orange:  #EC6610
// Blå:     #13283C
