import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modalbox';
import swipeIcon from '../bilder/swipeDown_small.png';

const information =
  'Välkommen till MT-Duellen!  \n \nTävla i appen och vinn fina priser på mässdagen. Det är endast MT-studenter som kan delta i tävlingen.';

const Info = ({modalState, closeInfo}) => {
  return (
    <Modal
      style={styles.modal}
      backdropColor={'grey'}
      backdrop={true}
      isOpen={modalState}
      onClosed={() => closeInfo()}>
      <View style={styles.textDiv}>
        <Text style={styles.text}>{information}</Text>
      </View>
      <View style={styles.closeDiv}>
        <Text style={styles.closeText}>Svep ned för att stänga</Text>
        <Image source={swipeIcon} style={styles.swipeIcon}></Image>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 300,
    zIndex: 300,

    width: '90%',
    height: '80%',
    borderRadius: 5,
  },
  textDiv: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  swipeIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  closeText: {
    fontSize: 20,
    margin: 10,
  },
  closeDiv: {
    opacity: 0.5,
    flex: 0.15,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  // closeInfoBtn: {
  //   backgroundColor: 'lightgrey',
  //   borderRadius: 50,
  //   width: 58,
  //   height: 58,
  //   right: -140,
  //   top: -200,
  //   fontSize: 30,
  //   zIndex: 300,
  //   elevation: 300,
  // },
});

export default Info;
