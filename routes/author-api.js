const db = require("../models");

module.exports = function(app) {
    app.route("/api/authors")
    .get(function(req, res) {
        db.Author.findAll({}).then(function(dbAuthor) {
            res.json(dbAuthor);
        });
    })
    .post(function(req, res) {
        db.Author.create(req.body).then(function(dbAuthor){
            res.json(dbAuthor);
        });
    });

    app.route("/api/authors/:id")
    .get(function(req, res) {
        db.Author.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbAuthor){
            res.json(dbAuthor);
        });
    })

    .delete(function(req, res) {
        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAuthor) {
            res.json(dbAuthor);
        })
    });
}