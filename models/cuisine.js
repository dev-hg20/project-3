module.exports = function (sequelize, DataTypes) {
  const Cuisine = sequelize.define("Cuisine", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Cuisine.associate = function (models) {
    //a story belongs to an author and belongs to a category due to the foreign keys
    Cuisine.hasMany(models.Restaurant, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Cuisine;
};
