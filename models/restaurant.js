module.exports = function (sequelize, DataTypes) {
  const Restaurant = sequelize.define("Restaurant", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  Restaurant.associate = function (models) {
    //a story belongs to an author and belongs to a category due to the foreign keys

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
