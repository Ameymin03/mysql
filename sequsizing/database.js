const Sequelize = require('sequelize');

const Sequelize = new Sequelize('node','root','Ameymin@12345',{dialect: 'mysql',host:'localhost'});

module.exports = Sequelize;