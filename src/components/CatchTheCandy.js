import React, {Component} from 'react';
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
    Pressable,
    AppState} from 'react-native';
import {GameEngine , entities, Score } from 'react-native-game-engine';
//import {randomInt} from 'random-int';


import Popup from './Popup';
import Launcher from './Launcher';
import Counter from './Counter';
import background from '../bilder/backgroundCandy.png';
import basket from '../bilder/wicker-basket/basket.png';
import lollipop from '../bilder/lollipop.png';
import Physics from './Candy/Physics';
import Tilt from './Candy/Tilt';
import Trajectory from './Candy/Trajectory';
import { Lollipop } from './Candy/Candy';

class CatchTheCandy extends Component {

  constructor() {
    super();
  };

  state = {
    count: 0,
    size: 30,
    secondTimer: false,
    firstModal: true,
    secondModal: false,
    firstTimer: false,
    showLauncher: false,
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

  getLollipop = () => {
    const body = Matter.Bodies.rectangle(randomInt(1, width - 50), randomInt(0, -200), 75, 45, {
      frictionAir: 0.05,
      label: 'obstacle',
      trajectory: randomInt(-5, 5) / 10,
    });
    const lollipop = { body, size: [75, 50], renderer: Lollipop };

    return { obstacle: lollipop, body };
  };

  render() {
    const gameTimer = 15;
    const gameInstruction = 'Fånga godis i din korg genom att tilta mobilen';
    let endText = 'Du fick ' + this.state.count + ' poäng';

    const { showOverlay, entities, score, appState } = this.state;

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

            {/* ----------------- MINIGAME CONTENT --------------------- */}
            <GameEngine
            style={styles.container}
            ref="engine"
            systems={[Physics, Tilt, Trajectory]}
            entities={entities}
            running={appState === 'active'}
            >

              {item = new Lollipop}

              <Image source={lollipop} style={styles.basket}></Image>

              <Image source={basket} style={styles.basket}></Image>
            </GameEngine>

            

            {/* ---------------- MINIGAME CONTENT END -------------------- */}


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
    basket: {
        alignItems: 'center',
        top: 220,
        left: 110,
    }
  });


export default CatchTheCandy;
