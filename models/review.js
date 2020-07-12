module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Review.associate = function (models) {
    //a restaurant belongs to a cuisine due to the foreign keys

    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Review.belongsTo(models.Restaurant, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Review;
};

//composite key
