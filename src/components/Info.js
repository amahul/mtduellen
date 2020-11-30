import React from 'react';
import {Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';
import {Link} from 'react-router-native';

// component CountryInfo
const Info = ({information, modalState, closeInfo}) => {
  return (
    <Modal style={styles.modal} backdrop={false} isOpen={modalState}>
      <TouchableOpacity onPress={() => closeInfo()} style={styles.closeInfoBtn}>
        <Text style={styles.text}>x</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{information}</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 11,
    zIndex: 11,
    width: '90%',
    height: '90%',
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  closeInfoBtn: {
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    width: 58,
    height: 58,
    right: -140,
    top: -200,
    fontSize: 30,
    zIndex: 300,
    elevation: 300,
  },
});

export default Info;
