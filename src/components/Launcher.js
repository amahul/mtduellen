import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

// component CountryInfo
const Launcher = ({running, startGame}) => {
  return (
    <View style={styles.containerTop}>
      <CountDown
        size={60}
        until={3}
        onFinish={() => {
          setTimeout(() => {
            startGame();
          }, 10);
          console.log('startGame');
        }}
        digitStyle={{
          borderWidth: 0,
        }}
        digitTxtStyle={{color: 'black'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        timeToShow={['S']}
        timeLabels={{m: null, s: null}}
        running={running}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //height: 30,
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(230,230,230,0.5)',
  },
});

export default Launcher;
