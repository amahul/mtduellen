import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

// component CountryInfo
const Counter = ({running, seconds, endGame}) => {
  return (
    <View style={styles.containerTop}>
      <CountDown
        size={50}
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
        style={{

          // alignSelf: 'center',
          // alignItems:'center',
          // justifyContent: 'flex-end',
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    // flex: 1,
    // flexWrap: 'wrap',
    flexDirection:'row',
    // alignItems:'stretch',
    justifyContent: 'center',
    // ...StyleSheet.absoluteFill,
    backgroundColor: 'transparent',
    width: '100%',
  },
});

export default Counter;
