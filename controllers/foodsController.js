const db = require("../models");

// const bodyParser = require("body-parser")

module.exports = {

  findAll: function(req, res) {
    db.Food.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findByCountry: function(req, res) {
  
    db.Food.find({ country: req.params.search })
    // console.log(req.query)
      .then(dbFood => res.json(dbFood))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("inside boodksCONTROLER")
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

