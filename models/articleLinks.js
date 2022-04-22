const {Sequelize , Model } = require('sequelize');
const sequelize = require('./../sequelize.js');

class Link extends Model {}
Link.init({
	id:{
		type:Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement:true,
		allowNull:false
	},
	articlelink:{
		type:Sequelize.TEXT,
		allowNull:false
	}
},{sequelize, modelName: "link"});

//Link.belongsTo(Article);
//Article.hasMany(Link);

module.exports = Link;
