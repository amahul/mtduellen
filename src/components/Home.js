import React, {Component} from 'react';
import {ImageBackground, View, Text, Image, StyleSheet} from 'react-native';

import {Link, useParams} from 'react-router-native';

import logo from '../bilder/logo_3.png';
import background from '../bilder/backgroundCandy.png';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <Image source={logo} style={styles.logo} />

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
  logo: {
    width: 160,
    height: 170,
    top: 10
  },
  image: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(236,102,17)',
    padding: 25,
    borderRadius: 20,
    top: 80,
  },
  text: {
    fontSize: 40,
  },
});

export default Home;
