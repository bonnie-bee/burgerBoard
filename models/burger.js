module.exports=function (sequelize, DataTypes) {
    const BobsBurgers = sequelize.define("BobsBurgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        page_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        holiday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        made: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });

   BobsBurgers.associate = function(models) {
       BobsBurgers.hasMany(models.Review, {
           onDelete: "cascade"
       });
   };
    return BobsBurgers;
};