import React, {Component} from 'react';
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

import logo from '../bilder/logo_3.png';
import background from '../bilder/backgroundCandy.png';
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

          <View>
            <Link to="/Tap" style={styles.button}>
              <Text>Spela</Text>
            </Link>
            <Link to="/Second" style={styles.button}>
              <Text>Spel nr2 </Text>
            </Link>
            <Link to="/Candy" style={styles.button}>
              <Text>Spel nr3 </Text>
            </Link>
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
    flex: 1,
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
    padding: 20,
    margin: 5,
    textAlign: 'center',
    borderRadius: 30,
    fontFamily: 'Helvetica Bold',
    fontSize: 40,
  },
});

export default Home;
