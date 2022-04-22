const {Sequelize, Model} = require('sequelize');
const sequelize = require('./../sequelize.js');
const Link =  require('./articleLinks.js');
class Article extends Model {}
Article.init({
	id:{
		type:Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement:true,
		allowNull:false
	},
	title: {
	    type:Sequelize.STRING,
		allowNull: false
	},
	overview:{
			type:Sequelize.TEXT,
			allowNull:false
	},
	article:{
		type:Sequelize.TEXT,
		allowNull:false
	},
	speciesImage:{
		type:Sequelize.TEXT,
	},
	likes:{
		type:Sequelize.INTEGER,
		defaultValue: 0
	}

},{sequelize, modelName:'article'});

Article.hasMany(Link);
Link.belongsTo(Article);


module.exports = Article;
