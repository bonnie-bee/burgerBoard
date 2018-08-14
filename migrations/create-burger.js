'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return [
            queryInterface.bulkInsert('BobsBurgers', [
                {
                    burger_name: "New Bacon-ings Burger",
                    page_number: 11,
                    made: false,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
                
            ])];
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};