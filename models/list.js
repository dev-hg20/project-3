module.exports = function (sequelize, DataTypes) {
  const List = sequelize.define("List", {
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

  List.associate = function (models) {
    //a story belongs to an author and belongs to a category due to the foreign keys

    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    List.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Story;
};
