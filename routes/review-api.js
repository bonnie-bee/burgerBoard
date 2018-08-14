const db = require("../models");

module.exports = function(app) {
    app.route("/api/reviews")
    //get all the reviews
    .get(function(req, res) {
        let query = {};
        if (req.query.AuthorId) {
            query.AuthorId = req.query.AuthorId;
        };
        if (req.query.BobsBurgerId) {
            query.BobsBurgerId = req.query.BobsBurgerId;
        };

        db.Review.findAll({
            where: query,
            include: [db.Author, db.BobsBurger]
        }).then(function(dbPost) {
            console.log("I found a post!")
            res.json(dbPost);
        });
    })
    //save a new review
    .post(function(req, res) {
        db.Review.create(req.body).then(function(dbReview) {
            console.log("I made a post!")
            res.json(dbReview)
        })
    });


    app.route("/api/reviews/:authorid?/:burgerid?")
    //get a single review
    .get(function(req, res) {
        db.Review.findOne({
            where: {
                AuthorId: req.params.authorid,
                BobsBurgerId: req.params.burgerid
            },
            include: [db.Author, db.BobsBurger]
        }).then(function(dbReview){
            console.log("i found one post!")
            res.json(dbReview)
        })
    })
    .delete(function(req, res) {
        db.Review.destroy({
            where:{
                AuthorId: req.params.authorid,
                BobsBurgerId: req.params.burgerid
            }
        }).then(function(dbReview) {
            res.json(dbReview)
        });
    });

}