const Trajectory = entities => {
    const obstacles = Object.values(entities).filter(
      item => item.body && item.body.label === 'obstacle'
    );
  
    obstacles.forEach(item => {
      if (item.body.position.x > width || item.body.position.x < 0) {
        Matter.Body.set(item.body, {
          trajectory: randomInt(-5, 5) / 10,
        });
        Matter.Body.setPosition(item.body, {
          x: randomInt(0, width - 30),
          y: 0,
        });
      }
  
      Matter.Body.setPosition(item.body, {
        x: item.body.position.x + item.body.trajectory,
        y: item.body.position.y,
      });
    });
  
    return entities;
  };

  export {Trajectory};