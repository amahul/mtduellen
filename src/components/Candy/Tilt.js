const Tilt = state => {
    const { rocket } = state;
    const xTilt = rocket.body.tilt;
    let xPos = rocket.body.position.x;
  
    if (xPos >= width - 25 && xTilt > 0) {
      xPos = width - 25;
    } else if (xPos <= 25 && xTilt < 0) {
      xPos = 25;
    } else {
      xPos += xTilt * 5;
    }
  
    Matter.Body.setPosition(rocket.body, {
      x: xPos,
      y: height - 200,
    });
  
    return state;
  };

  export {Tilt};