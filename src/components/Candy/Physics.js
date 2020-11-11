const Physics = (entities, { time }) => {
    const { engine } = entities.physics;
    engine.world.gravity.y = 0.5;
    Matter.Engine.update(engine, time.delta);
    return entities;
  };

  export {Physics};