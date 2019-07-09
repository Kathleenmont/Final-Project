// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const foodSchema = new Schema({
//     // _id: {type: Schema.Types.ObjectId, required:true},
//     continent: { type: String, required: true },
//     country: { type: String, required: true },
//     dishName: { type: String, required: true },
//     description: { type: String, required: true },
//     image: { type: String, required: true },
//     tried: {type: Boolean, required: true}
    
// });

// const Food = mongoose.model("Food", foodSchema);


// module.exports = Food;
module.exports = function(sequelize, DataTypes) {
    var Food = sequelize.define("Food", {
      // post table sequalize model
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
      Food.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
    };
  
    return Food;
  };