module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER,   
            allowNull: false
        }
    });
    Review.associate = function(models) {

        Review.belongsToMany(models.Author, {through: 'AuthorBobsBurgers'})
        Review.belongsToMany(models.BobsBurgers, {through: 'AuthorBobsBurgers'})
    };

    return Review;
};