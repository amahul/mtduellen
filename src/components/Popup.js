import React from 'react';
import {Text, Button, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modalbox';
import {Link} from 'react-router-native';
import spelregler from '../bilder/spelregler.png';
import spela from '../bilder/spela.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


// component CountryInfo
const Popup = ({content, modalState, action, button, link}) => {
  return (
    <Modal
      style={styles.modal}
      backdrop={false}
      position={'center'}
      isOpen={modalState}>
      <Image
              source={spelregler}
              style={{ resizeMode: 'contain', width: 200,
              alignItems: 'flex-start',
              height: 70,
              bottom: 25,
              margin: 5,
              }} 
              /> 
      <Text style={styles.text}>{content}</Text>

      {/* {button && <Button onPress={() => action()} title="Kör igång" />}
      {link && (
        <Link to={action} underlayColor="#f0f4f7">
          <Text>Nästa spel</Text>
        </Link>
      )} */}
    
    

          <TouchableWithoutFeedback onPress={()=> action()}
          style={{top:30}}>
            <Image
              source={spela}
              style={{width: 250, height: 70, bottom: 0, margin: 5, top: 0}}
            />
          </TouchableWithoutFeedback>

      {link && (
        <Link to={action} underlayColor="#f0f4f7">
          <Text>Avsluta spelet</Text>
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

export default Popup;
