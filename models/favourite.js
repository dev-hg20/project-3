module.exports = function (sequelize, DataTypes) {
  const Favourite = sequelize.define("Favourite", {});

  Favourite.associate = function (models) {
    //a restaurant belongs to a cuisine due to the foreign keys

    Favourite.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Favourite.belongsTo(models.Restaurant, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Favourite;
};
