'use strict';
module.exports = (sequelize, DataTypes) => {
  var Page = sequelize.define('Page', {
    rivet_type: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Page;
};
