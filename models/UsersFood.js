module.exports = function(sequelize, DataTypes) {
    const UsersFood = sequelize.define("UsersFood", {
    
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
   

    return UsersFood;
  };
  