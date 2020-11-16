import React from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import Modal from 'react-native-modalbox';
import {Link} from 'react-router-native';

// component CountryInfo
const Info = () => {
  return (
    <Modal
      style={styles.modal}
      backdrop={false}
      position={'center'}
      isOpen={true}>
      <Text style={styles.text}>{content}</Text>

      {button && <Button onPress={() => action()} title="X" />}
      {link && (
        <Link to={action} underlayColor="#f0f4f7">
          <Text>Nästa spel</Text>
        </Link>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      position: 'absolute',
      width: 180,
      marginTop: 1,
      marginRight: 2,
    },
    borderRadius: 10,
    height: 300,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Info;
