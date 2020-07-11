module.exports = function (sequelize, DataTypes) {
  const userToRestaurant = sequelize.define("userToRestaurant", {
    // ratings: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1],
    //   },
    // },
  });

  userToRestaurant.associate = function (models) {
    //a restaurant belongs to a cuisine due to the foreign keys

    userToRestaurant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    userToRestaurant.belongsTo(models.Restaurant, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return userToRestaurant;
};
