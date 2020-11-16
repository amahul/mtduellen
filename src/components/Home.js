import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

import {Link, useParams} from 'react-router-native';

import logo from '../bilder/logo_3.png';
import background from '../bilder/backgroundCandy.png';
import info from '../bilder/info-button.png';

const information = 'Det är endast MT-studenter som kan delta i tävlingen';

class Home extends Component {
  state = {
    infoModal: false,
  };
  openInfo = () => {
    this.setState({
      infoModal: true,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <View style={{flex: 1, flexDirection: 'row', paddingTop: 30}}>
            <View style={styles.infobutt}>
              <Image style={styles.img} source={info} onpress={this.openInfo} />
            </View>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={{width: '33%'}}></View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <View style={styles.button}>
              <Link to="/Tap">
                <Text style={styles.text}>Spela</Text>
              </Link>
              <Link to="/Second">
                <Text style={styles.text}>Spel nr2 </Text>
              </Link>
              <Link to="/Candy">
                <Text style={styles.text}>Spel nr3 </Text>
              </Link>
            </View>
          </View>
          {/* INFO MODAL */}
          {this.state.firstModal && (
            <Popup
              content={information}
              button={true}
              link={false}
              action="/Second"
            />
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    alignSelf: 'stretch',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    resizeMode: 'cover',
    alignItems: 'center',
  },
  infobutt: {
    height: 100,
    flex: 1,
    width: '33%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logoContainer: {
    height: 100,
    flex: 1,
    width: '33%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    padding: 50,
    borderRadius: 60,
  },
  text: {
    fontSize: 40,
    fontFamily: 'Helvetica-Bold',
    color: '#2B2B2B',
    justifyContent: 'center',
  },
});

export default Home;
