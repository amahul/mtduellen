import React, {Component ,useState} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity, 
    ImageBackground,
    Image,
    Animated,
    Easing,
    Button,
    Pressable} from 'react-native';

import {Link} from 'react-router-native';

import Popup from './Popup';
import Launcher from './Launcher';
import Counter from './Counter';
import background from '../bilder/backgroundCandy.png';
import basket from '../bilder/wicker-basket/basket.png';

class Candy extends Component {
  state = {
    count: 0,
    size: 30,
    secondTimer: false,
    firstModal: true,
    secondModal: false,
    firstTimer: false,
    showLauncher: false,
    velocity: 0,
    yPos: 150 + 200,
    jumping: false,
    changeColor: new Animated.Value(1),
    useNativeDriver: true
  };

  onPress = () => {
    // change size of button and add to count
    if (this.state.secondTimer) {
      this.setState({
        count: this.state.count + 1,
        size: this.state.size + 2,
      });
    }
  };

  startGame = () => {
    this.setState({
      secondTimer: true,
      showLauncher: false,
    });
  };

  endGame = () => {
    this.setState({
      secondModal: true,
      secondTimer: false,
    });
  };

  startLauncher = () => {
    this.setState({
      firstModal: false,
      firstTimer: true,
      showLauncher: true,
    });
  };

//   constructor() {
//     super();
//     this.animatedValue = new Animated.Value(0);
//   }

  animate = () => {
    // if (this.state.secondTimer && this.state.jumping == false) {
    //   this.setState({
    //     jumping: true,
    //   });
    //   this.animatedValue.setValue(0);
    //   Animated.timing(this.animatedValue, {
    //     toValue: 1,
    //     duration: 500,
    //     useNativeDriver: false,
    //     easing: Easing.linear,
    //   }).start(() =>
    //     this.setState({
    //       jumping: false,
    //     }),
    //   );
    // }
  };


toBlue = () => {
    Animated.timing(this.state.changeColor, {
        toValue: 0,
        duration: 2000
    }).start();
}
  

  render() {
    const gameTimer = 15;
    const gameInstruction = 'Fånga godis i din korg genom att tilta mobilen';
    let endText = 'Du fick ' + this.state.count + ' poäng';

        return (
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>

                <TouchableWithoutFeedback >
                    <View style={styles.container}>

                
                        {/* GAME COUNTER */}
                        <Counter
                        seconds={gameTimer}
                        running={this.state.secondTimer}
                        endGame={this.endGame}
                        />

                        {/* MINIGAME CONTENT */}
                        <Animated.View onPress={() => this.toBlue()}
                            style={[styles.green, {opacity: this.state.changeColor}]}>
                                
                        </Animated.View>

                        <Image source={basket} style={styles.basket}></Image>

                        <View style={styles.button}>
                            <Button title="Press me!" onPress={this.toBlue} ></Button>
                        </View>

                        {/* MINIGAME CONTENT END */}


                        {/* FIRST MODAL */}
                        {this.state.firstModal && (
                        <Popup
                            content={gameInstruction}
                            button={true}
                            link={false}
                            action={this.startLauncher}
                        />
                        )}

                        {/* SECOND MODAL */}
                        {this.state.secondModal && (
                        <Popup content={endText} button={false} link={true} action="/" />
                        )}

                        {/* LAUNCHER */}
                        {this.state.showLauncher && (
                        <Launcher
                            running={this.state.firstTimer}
                            startGame={this.startGame}
                        />
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'orange',
      borderRadius: 20,
      padding: 40,
      width: '50%',
      left: 100,
      bottom: 300,
    },
    modal: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      height: 300,
      width: 300,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
  
      elevation: 11,
    },
    character: {
      marginTop: 120,
      marginLeft: 30,
    },
    text: {
      fontSize: 40,
      textAlign: 'center',
    },
    blue: {
        color: 'blue',
        height: 100,
        width: 100,
        left: '40%',
        top: 400,
        borderRadius: 50,
        backgroundColor: 'blue'
    },
    green: {
        color: 'green',
        height: 100,
        width: 100,
        left: '40%',
        top: 400,
        borderRadius: 50,
        backgroundColor: 'green'
    },
    basket: {
        alignItems: 'center',
        top: 220,
        left: 110,
    }
  });


export default Candy;
