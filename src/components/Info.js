import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import general from './components/content/general.json';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={style.text}>{general.game1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    font: 30,
    color: black,
  },
  container: {
    backgroundColor: grey,
  },
});

export default Info;
