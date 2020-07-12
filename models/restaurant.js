module.exports = function (sequelize, DataTypes) {
  const Restaurant = sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    mustHave: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  Restaurant.associate = function (models) {
    //a restaurant belongs to a cuisine due to the foreign keys

    Restaurant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });

    Restaurant.belongsTo(models.Cuisine, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Restaurant;
};
