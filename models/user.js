const bcrypt = require('bcrypt');

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {timestamps: false});
   // connect to Food table
   User.associate = function(models) {
    User.belongsToMany(models.Food, {
      through: "UsersFood",
      as: "Food",
      foreignKey: "userId"
    },
   
    );
  };
  // generating a hash
  User.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
// checking if password is valid
User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.localPassword);
}

  return User;
};
