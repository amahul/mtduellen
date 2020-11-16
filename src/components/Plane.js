import React from 'react';
import {Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

//const airplane = require('../../assets/airplane.png');
const airplane = require('../bilder/bird2.png');

const Plane = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y / 2;
  return (
    <Image
      style={{
        position: 'absolute',
        left: -150,
        top: y,
        width: 200,
        height: 200,
      }}
      resizeMode="stretch"
      source={airplane}
    />
  );
};

export default (world, color, pos, size) => {
  const initialPlane = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
  );
  Matter.World.add(world, [initialPlane]);

  return {
    body: initialPlane,
    size: [size.width, size.height],
    color: color,
    renderer: <Plane />,
  };
};

Plane.propTypes = {
  size: array,
  body: object,
  color: string,
};
