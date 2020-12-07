import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

const Counter = ({running, seconds, endGame}) => {
  return (
    <View style={styles.containerTop}>
      <CountDown
        size={60}
        until={seconds}
        onFinish={() => endGame()}
        digitStyle={{
          borderWidth: 0,
        }}
        digitTxtStyle={{color: 'white'}}
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
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },
});

export default Counter;
