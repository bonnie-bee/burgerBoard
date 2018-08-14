const db = require("../models");

module.exports = function(app) {
    app.route("/")
    .get(function(req, res) {
        db.BobsBurgers.findAll({}).then(function(dbBurger) {
            console.log(dbBurger);
            res.render("index", dbBurger)
        })
    })
    app.route("/api/burger")
    .get(function(req, res) {
        db.BobsBurgers.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    })
    .post(function(req, res) {
        db.BobsBurgers.create(req.body).then(function(dbBurger){
            res.json(dbBurger);
        });
    });

    app.route("/api/burgers/:id")
    .get(function(req, res) {
        db.BobsBurgers.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger){
            res.json(dbBurger);
        });
    })

    .delete(function(req, res) {
        db.BobsBurgers.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        })
    });
}