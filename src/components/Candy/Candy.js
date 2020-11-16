import lollipop from '../../bilder/lollipop.png';

const Lollipop = ({body, size}) => {
  const {position} = body;
  const sizeWidth = size[0];
  const sizeHeight = size[1];
  const x = position.x - sizeWidth / 2;
  const {y} = position;

  return (
    <Image
      source={lollipop}
      style={[
        styles.lollipop,
        {
          left: x,
          top: y,
          width: sizeWidth,
          height: sizeHeight,
        },
      ]}
    />
  );
};

export {Lollipop};
