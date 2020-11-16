import React, {Component} from 'react';
import {ImageBackground, View, Text, Image, StyleSheet} from 'react-native';
import {Link, useParams, withRouter} from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../bilder/logo_3.png';
import background from '../bilder/homeBackground.png';

import './Storage.js';

const store = require('./Storage');

class Home extends Component {
  state = {
    score: '0',
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}> 
          <Image source={logo} style={styles.logo} />
          
          <View style={{position:'relative', top: 250}} > 
          <LinearGradient colors={['#F49D6C', '#EC6610', '#913305']} locations={[0.0,0.5,1]} style={styles.button}>
              <Link to="/Tap">
                <Text style={styles.text}>SPELA</Text>
              </Link>
              {/* <Link to="/Second">
                <Text style={styles.text}>Spel nr2 </Text>
                                                                  -------------------------- Orange: #EC6610 -----------------------
              </Link> */}
            </LinearGradient>
            
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    alignSelf: 'stretch',
  },
  logo: {
    width: 160,
    height: 170,
    top: 10,
  },
  image: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(236,102,17)',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 70,
    top: 80,
    elevation: 10, // drop-shadow, funkar inte...
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: '#233849',
    lineHeight: 50,
    fontFamily: "serif",
  },
});

export default Home;
