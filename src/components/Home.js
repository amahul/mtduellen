import React, {Component} from 'react';

import './Storage.js';
const store = require('./Storage'); // Ska dessa vara kvar?

import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  Action
} from 'react-native';



import Modal from 'react-native-modalbox';
import {greaterThan} from 'react-native-reanimated';
  
import {Icon} from 'react-native-elements';
import icon from '../bilder/info_dark.png';

import {Link, useParams, withRouter} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

import logo from '../bilder/logo_3.png';
import logo2 from '../bilder/logo_alt2.png';
import highscores from '../bilder/highscore_dark.png';
import highscoresExpanded from '../bilder/highscore_expanded.png';
import play from '../bilder/play_dark.png';
import background from '../bilder/homeBackground.png';
import Popup from './Popup';
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
        <View>
          <TouchableOpacity
            style={{opacity: 0.9}}
            activeOpacity={0.5}
            onPress={this.openInfo}
            //style={styles.infoBtn}
            title="Info">
            <Image
              source={icon}
              style={{width: 60, height: 60, bottom: 0, margin: 10, left: 340}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {/* <TouchableOpacity onPress={this.openInfo} style={styles.infoBtn}>
            <Text style={styles.text}>i</Text>
          </TouchableOpacity> */}
          <View style={styles.logoContainer}>
            <Image source={logo2} style={styles.logo} />
          </View>
          <View style={styles.logoContainer}>
            {/* <Text style={styles.text, {color:'lightgrey', margin:10, fontSize:24}}>Vinn fina priser på mässdagen!</Text> */}
          </View>

          <View>
            {/* <Link to="/Tap" style={styles.button}>
              <Text style={styles.text}>Spela</Text>
            </Link> */}
            <Image
              source={highscores}
              style={{width: 300, height: 70, bottom: 40, margin: 5}}
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

          {/* <View style={{position:'relative', bottom: 100}} > 
          <LinearGradient colors={['#F49D6C', '#EC6610', '#913305']} locations={[0.0,0.5,1]} style={styles.button}>
              <Link to="/Tap">
                <Text style={styles.text}>SPELA</Text>
              </Link>
              <Link to="/Second">
                <Text style={styles.text}>Spel nr2 </Text>
              </Link>
             </LinearGradient>
          </View>  */}

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
  infoBtn: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    top: 10,
    left: '35%',
    height: 50,
  },
  logoContainer: {
    top: 40,
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
    // width: 160,
    // height: 170,
    width: 255,
    height: 190,
    top: 10,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgb(236,102,17)',
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 70,
    top: 80,
    elevation: 10, // drop-shadow, funkar inte...
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
