import React from 'react';
import {Image} from 'react-native';

import character from '../bilder/test.png';

const Info = ({xPos, yPos}) => {
  return (
    <Image
      source={character}
      style={[
        {
          left: xPos,
          top: yPos,
          resizeMode: 'contain',
          height: 380,
          width: 150,
        },
      ]}
    />
  );
};

export default Info;
