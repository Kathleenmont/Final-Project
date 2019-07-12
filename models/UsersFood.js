module.exports = function(sequelize, DataTypes) {
    const UsersFood = sequelize.define("UsersFood", {
      // The email cannot be null, and must be a proper email before creation
      userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: "User",
              key: "id"
          }
        },
      tried: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Food",
          key: "id"
        }
      },
   
    }, {timestamps: false});
   
    // UsersFood.associate = function(models) {
    //   UsersFood.belongsToMany(models.User, {
    //     through: "User",
    //       as: "tried",
    //       foreignKey: "tried"
    //   });
    // };
    return UsersFood;
  };
  