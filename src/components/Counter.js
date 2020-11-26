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
<<<<<<< HEAD
        style={{

          // alignSelf: 'center',
          // alignItems:'center',
          // justifyContent: 'flex-end',
          }}
=======
        style={
          {
            // alignSelf: 'center',
            // alignItems:'center',
            // justifyContent: 'flex-end',
          }
        }
>>>>>>> 3654841e7f705a18aecbfee4d2a1c6af4dc65cb9
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    // flex: 1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    // alignItems:'stretch',
    justifyContent: 'center',
    // ...StyleSheet.absoluteFill,
    backgroundColor: 'transparent',
    width: '100%',
  },
});

export default Counter;
