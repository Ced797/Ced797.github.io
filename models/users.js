const Sequelize = require('sequelize');
const sequelize = require('./../sequelize.js');

const users = sequelize.define('users', {
	id: {
		type:Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
	},
	username: {
	    type:Sequelize.STRING,
		allowNull: false
	},
	pass: {
	    type:Sequelize.STRING,
		allowNull: false
	}
});

module.exports = users;
