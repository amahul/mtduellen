import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

import {Link} from 'react-router-native';

import logo from '../bilder/logo_3.png';
import background from '../bilder/backgroundCandy.png';
import Modal from 'react-native-modalbox';
import Info from './Info';
import {greaterThan} from 'react-native-reanimated';
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
      <ImageBackground source={background} style={styles.imageBackground}>
        {/* <Button
          onPress={() => this.openInfo()}
          style={styles.infoBtn}
          title="Info"
        /> */}

        <View style={styles.container}>
          <TouchableOpacity onPress={this.openInfo} style={styles.infoBtn}>
            <Text style={styles.text}>i</Text>
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View>
            <Link to="/Tap" style={styles.button}>
              <Text style={styles.text}>Spela</Text>
            </Link>
          </View>

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
    flex: 1,
    height: '100%',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'stretch',
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
    height: 200,
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
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgb(236,102,17)',
    padding: 20,
    margin: 5,
    top: 200,
    textAlign: 'center',
    borderRadius: 30,
    fontFamily: 'Helvetica Bold',
    fontSize: 40,
  },
});

export default Home;
