module.exports = (sequelize, Sequelize) => {
  const Tracker = sequelize.define("tracker", {
    vechileId: {
      type: Sequelize.STRING
    },
    latitude: {
      type: Sequelize.STRING
    },
    longitude: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Tracker;
};
