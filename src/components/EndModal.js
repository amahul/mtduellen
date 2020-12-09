import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modalbox';
import {Link} from 'react-router-native';

import avsluta from '../bilder/avsluta_small.png';
import braJobbat from '../bilder/braJobbat_small.png';

const EndModal = ({modalState, points}) => {
  return (
    <Modal
      style={styles.modal}
      backdrop={true}
      backdropColor={'grey'}
      position={'center'}
      isOpen={modalState}
      swipeToClose={false}>
      <Image
        source={braJobbat}
        style={{
          resizeMode: 'contain',
          width: 200,
          alignItems: 'flex-start',
          //height: 70,
          margin: 5,
        }}
      />
      <View style={styles.textHolder}>
        <Text style={styles.baseText}>Du fick </Text>
        <Text style={styles.innerText}>{points}</Text>
        <Text style={styles.baseText}>poäng</Text>
      </View>

      <Link to="/" underlayColor="white">
        <Image source={avsluta} style={styles.finishBtn} />
      </Link>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    height: '50%',
    padding: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    //elevation: 11,
  },
  textHolder: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'green',
  },
  baseText: {
    fontSize: 30,
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 45,
    margin: 10,
  },
  finishBtn: {
    width: 250,
    height: 70,
    margin: 5,
  },
});

export default EndModal;
