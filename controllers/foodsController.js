const db = require("../models");

// const bodyParser = require("body-parser")

module.exports = {

  findAll: function(req, res) {
    db.Food.findAll({})(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findByCountry: function(req, res) {
    // console.log("inside foodsCONTROLER")
    // console.log(req.body.coun)
  
    db.Food.findAll({ where: {country: req.body.coun} })
    // console.log(dbModel)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("inside  create foodsCONTROLER")
    db.Food
      .create(req.body)
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Food.findById(req.params.id)
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Food.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbFood => dbFood.remove())
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  }
};

