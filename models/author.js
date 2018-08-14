module.exports = function(sequelize, DataTypes) {
    const Author = sequelize.define("Author", {
        author_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Author.associate = function(models) {
        Author.hasMany(models.Review, {
            onDelete: "cascade"
        })
    }

    return Author;
}