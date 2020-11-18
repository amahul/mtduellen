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
  Pressable,
  TouchableOpacity,
  Action
} from 'react-native';
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
      <ImageBackground  style={styles.imageBackground}>
        {/* <Button
          onPress={() => Alert.alert('Simple Button pressed')}
          style={styles.infoBtn}
          title="Info"></Button>
        <Icon
          reverse
          name="ios-american-football"
          type="ionicon"
          color="#517fa4"
        > 
        </Icon> */}
        <View>
          <TouchableOpacity
            style={{opacity:0.9}}
            activeOpacity={0.5}
            onPress={() => Alert.alert(information)}
            //style={styles.infoBtn}
            title="Info">
              <Image source={icon} style={{width: 60, height: 60, bottom: 0, margin:10, left: 340}}/>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo2} style={styles.logo} />
          </View>
          <View style={styles.logoContainer}>
            {/* <Text style={styles.text, {color:'lightgrey', margin:10, fontSize:24}}>Vinn fina priser på mässdagen!</Text> */}
          </View>

          <View>
            <Image source={highscores} style={{width: 300, height: 70, bottom: 40, margin:5}}/>
            {/* <Image source={highscoresExpanded} style={{width: 300, height: 250, bottom: 40, margin:5}}/> */}
          </View>
          <TouchableOpacity 
            style={{bottom:40}} 
            activeOpacity={0.5}
            >
              {/* onPress={() => this.props.navigation.navigate("/Tap")} */}
            <Link to="/Tap">
              <Image source={play} style={{width: 300, height: 70, bottom: 0, margin: 5}} />
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
    backgroundColor: '#13283C',
  },
  infoBtn: {
    padding: 500,
    left: 0,
    color: 'white',
    flex: 1,
    width: 30,
  },
  logoContainer: {
    top:40,
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
    color: '#13283C',
    lineHeight: 50,
    fontFamily: "serif",
    //fontFamily: 'Helvetica Bold',
  },
});

export default Home;


// -----------------  Färgkoder -------------------- //
// Orange:  #EC6610
// Blå:     #13283C