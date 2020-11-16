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
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';

import {Link, useParams, withRouter} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

import logo from '../bilder/logo_3.png';
import background from '../bilder/homeBackground.png';
import Popup from './Popup';
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

  render() {
    return (
      <ImageBackground source={background} style={styles.imageBackground}>
        <Button
          onPress={() => Alert.alert('Simple Button pressed')}
          style={styles.infoBtn}
          title="Info"></Button>
        <Icon
          reverse
          name="ios-american-football"
          type="ionicon"
          color="#517fa4"
        />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View style={{position:'relative', bottom: 100}} > 
          <LinearGradient colors={['#F49D6C', '#EC6610', '#913305']} locations={[0.0,0.5,1]} style={styles.button}>
              <Link to="/Tap">
                <Text style={styles.text}>SPELA</Text>
              </Link>
              {/* <Link to="/Second">
                <Text style={styles.text}>Spel nr2 </Text>
              </Link> */}
            </LinearGradient>
          </View>

          {/* INFO MODAL */}
          {this.state.infoModal && (
            <Popup
              content={information}
              button={false}
              link={true}
              action="/"
            />
          )}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  infoBtn: {
    padding: 500,
    left: 0,
    color: 'white',
    flex: 1,
    width: 30,
  },
  logoContainer: {
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
    width: 160,
    height: 170,
    top: 10,
  },
  button: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 40,
    fontWeight: "bold",
    color: '#233849',
    lineHeight: 50,
    fontFamily: "serif",
    //fontFamily: 'Helvetica Bold',
  },
});

export default Home;


// -----------------  Färgkoder -------------------- //
// Orange:  #EC6610
// Blå:     #13283C