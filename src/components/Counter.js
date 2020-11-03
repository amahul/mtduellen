import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

// component CountryInfo
const Counter = ({running, seconds, endGame}) => {
  return (
    <View>
      <CountDown
        size={50}
        until={seconds}
        onFinish={() => endGame()}
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
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(230,230,230,0.5)',
  },
});

export default Counter;
