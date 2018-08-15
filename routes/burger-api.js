const db = require("../models");
var Sequelize = require('sequelize');


module.exports = function (app) {
    app.route("/")
        .get(function (req, res) {
            //order id's randomly and only pick one to show!
            db.BobsBurgers.findAll({ order: Sequelize.literal('rand()'), limit: 1 }).then(function (dbBurger) {
                const hbsObject = {
                    bobsburgers: dbBurger
                }
                // console.log(`hbsObject: ${dbBurger}`);
                res.render('index', hbsObject);
            })

            // db.BobsBurgers.findAll({}).then( function(dbBurger){
            //     const hbsObject = {
            //         bobsburgers: dbBurger
            //     }
            //     res.render('partials/madeBurger/made-block', hbsObject)
            // })
        })
    app.route("/api/burger")
        .get(function (req, res) {
            db.BobsBurgers.findAll({}).then(function (dbBurger) {
                res.json(dbBurger);
            });
        })
        .post(function (req, res) {
            db.BobsBurgers.create(req.body).then(function (dbBurger) {
                res.json(dbBurger);
            });
        });

    app.route("/api/burgers/:id")
        .put(function (req, res) {
                
                let updateValues = {made: true}

            db.BobsBurgers.update(updateValues, { where: {id: req.params.id}})
            .then(function (dbBurger) {
                res.json(dbBurger);
            });
        })

        .delete(function (req, res) {
            db.BobsBurgers.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (dbBurger) {
                res.json(dbBurger);
            })
        });
}