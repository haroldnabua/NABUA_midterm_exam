//Importing required modules
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});


sequelize.authenticate()
    .then(() => {
        console.log('Connection successful.');
    })
    .catch((error) => {
        console.error('Database unable to connect:', error);
    });

module.exports = sequelize;
