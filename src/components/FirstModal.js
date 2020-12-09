import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modalbox';

import spelregler from '../bilder/spelregler_small.png';
import spela from '../bilder/spela_small.png';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const gameInstruction = 'Tryck på knappen så många gånger du kan';

const FirstModal = ({modalState, action}) => {
  return (
    <Modal
      swipeToClose={false}
      style={styles.modal}
      backdrop={false}
      position={'center'}
      isOpen={modalState}>
      <Image source={spelregler} style={styles.startBtn} />
      <Text style={styles.text}>{gameInstruction}</Text>

      <TouchableWithoutFeedback onPress={() => action()} style={{top: 30}}>
        <Image
          source={spela}
          style={{width: 250, height: 70, bottom: 0, margin: 5, top: 0}}
        />
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    //position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '50%',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    padding: 20,
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  startBtn: {
    resizeMode: 'contain',
    width: 200,
    alignItems: 'flex-start',
    height: 70,
    bottom: 25,
    margin: 5,
  },
});

export default FirstModal;
