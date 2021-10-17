module.exports = (sequelize, Sequelize) => {
  const Trackerconf = sequelize.define("trackerconf", {
    tracktime: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Trackerconf;
};
