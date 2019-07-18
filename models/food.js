module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
    
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      dishName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.STRING(550),
        allowNull: false,
        len: [1]
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      tried: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
        
      }
    
    }, {timestamps: false});
  
    // connects to User table
    Food.associate = function(models) {
      Food.belongsToMany(models.User, {
        through: "UsersFood",
          as: "users",
          foreignKey: "foodId"
        
      });
    };
  
    return Food;
  };