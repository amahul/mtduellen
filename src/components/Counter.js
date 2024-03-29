import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

// component CountryInfo
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
        style={
          {
            // alignSelf: 'center',
            // alignItems:'center',
            // justifyContent: 'flex-end',
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTop: {
<<<<<<< HEAD
    flex: 1,
    alignSelf: 'center',
    alignItems:'stretch',
    justifyContent: 'center',
    // ...StyleSheet.absoluteFill,
    backgroundColor: 'transparent',
=======
    // flex: 1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    // alignItems:'stretch',
    justifyContent: 'center',
    // ...StyleSheet.absoluteFill,
    backgroundColor: 'transparent',
    width: '100%',
>>>>>>> b783a9407ab04fe68b5ea82eb843d3d3b7725095
  },
});

export default Counter;
