import React, {Component} from 'react';

import './Storage.js';
const store = require('./Storage'); // Ska dessa vara kvar?

import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import icon from '../bilder/info_dark.png';

import {Link} from 'react-router-native';

import logo2 from '../bilder/logo_alt2.png';
import highscores from '../bilder/highscore_dark.png';
import highscoresExpanded from '../bilder/highscores_expanded.png';
import play from '../bilder/play_dark.png';

import Info from './Info';
const information = 'Det är endast MT-studenter som kan delta i tävlingen';

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
            <Image source={logo2} style={styles.logo} />
          </View>
          <View>
            {/* <Link to="/Tap" style={styles.button}>
              <Text style={styles.text}>Spela</Text>
            </Link> */}
            <Image
              source={highscoresExpanded}
              style={{
                resizeMode: 'contain',
                width: 300,
                height: 200,
                bottom: 40,
                margin: 5,
              }}
            />
            {/* <Image source={highscoresExpanded} style={{width: 300, height: 250, bottom: 40, margin:5}}/> */}
          </View>
          <TouchableOpacity style={{bottom: 40}} activeOpacity={0.5}>
            {/* onPress={() => this.props.navigation.navigate("/Tap")} */}
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
  },
  logoContainer: {
    top: 80,
    height: 100,
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  img: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
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
  },
});

export default Home;

// -----------------  Färgkoder -------------------- //
// Orange:  #EC6610
// Blå:     #13283C
