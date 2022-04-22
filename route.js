const express = require('express');
const Sequelize = require('./sequelize');
const sequelize = require('./sequelize.js');
const  {QueryTypes} = require('sequelize');
const Article = require('./models/articles.js');
const Link =  require('./models/articleLinks.js');
const category = require('./models/articleCategory.js');
const users = require('./models/users.js');
const session = require('express-session');

const route = express.Router();

/*route.use(session({secret:"NequeporABCroquisqua%^*()&mestquidolitseasyoremip@#$!#$!sumquiaasdolorsit123ametyou(*)AndMecoDOrei!@##$%^$^$^Thensectetur,adipiscivelit",
	resave:false,
	 cookie: { maxAge:3600000,secure:true }
}));

route.get('/login',(req,res)=>{
	res.render('login');
})

route.post('/login',(req,res)=>{
		let req.session =session;

		let username = req.body.username;
		let pass = req.body.pass;

		users.findOne({
			where:{
				username: username,
				pass : pass
			}
		}).then((users)=>{
			if(username == user.username && pass == pass){
						res.redirect('/admin/article');
			}
			else{
				res.send("Invalid username,password or both I don't know thats your problem.");
			}
		}).catch((err)=>{console.log('error-2',err)});
});

route.get('/logout',(req,res)=>{
	req.session.destroy();
	res.redirect('/');
});
*/
route.get('/',(req,res) => {
	Article.findAll({
		where: {
			ArticleCategoryId:2
		}
	}).then((articles) => {
		//console.log(articles);
		res.render('home',{articles : articles});
	}).catch((err)=>{console.log('error-2',err)});

});

route.get('/admin/login',(req,res) =>{
    res.render('login');
});

route.post('/admin/login',(req,res) =>{
    let user = req.body.username;
  //  let pass = req.body.password;
//	let req.session.password = req.body.password;

    users.findAll().then((users) => {
    		console.log(users.username+"   abcdef");

    		res.redirect("/admin/article");
    	}).catch((err)=>{console.log('error-3',err)});

});

route.get('/admin/article', (req,res) =>{
	category.findAll().then((categories)=>{
		console.log(categories);
		res.render('adminArticle',{categories:categories});
	}).catch((err)=>{console.log('error-6',err)});

});

route.post('/admin/article',(req,res) =>{
	let x = req.body;
	let title = req.body.title;
	let article = req.body.article;
	let overview = req.body.overview;
	let Image = req.body.specImage;
	let allLinks = [];
	//let categoryType = req.body.categoryType;
	let category = req.body.category;

	Object.entries(x).forEach(([key,value]) => {
		if(`${key}`.substring(0,4) === 'link')
			{
				allLinks.push({articlelink:`${value}`});
			}
	})

//console.log(image);

	Article.create({
		title:title,
		overview:overview,
		article:article,
		ArticleCategoryId:category,
		speciesImage:Image,
    links : allLinks,
	},{
    include: [Link]
  }).then((article)=>{
		res.redirect('/');
		console.log(article);
    console.log(' yea it worked');
  }).catch((err)=>{console.log('error-6',err)});
});

route.get('/editArticles',(req,res)=>{ //route to edit articles
	Article.findAll().then((articles) => {
		//console.log(articles);
		res.render('articles_to_be_edited',{articles : articles});
	}).catch((err)=>{console.log('error-2',err)});

});

route.get('/editArticle/:id',(req,res) =>{  //definitely do
	let id = req.params.id;
	Article.findOne({
		where:{id: id},
		include:Link
	}).then((article)=>{

		article.getLinks().then((links)=>{
			console.log(article);
		res.render('editArticle',{article:article, links: links});
		});

	}).catch((err)=>{console.log('error-2',err)});
});

route.post('/editArticle/:id',(req,res)=>{
	let newArticle = req.body.newArticle;
	let newTitle = req.body.newTitle;
	let newOverview = req.body.newOverview;
	let newarticleType    // database inconsistency with the setup not allowing you to change article type
	let newLinks // figure out how to render links
	let id = req.params.id;

	Article.findByPk(id).then((articles)=>{
		console.log(articles);
		articles.set({
			title:newTitle,
			overview:newOverview,
			article:newArticle
		});
		articles.save();
		res.redirect('/');
	}).catch((err)=>{console.log('edit article error',err)});
});

route.post('/editArticle/delete/:id',(req,res) =>{
	let id = req.params.id;
	Article.findByPk(id).then((articles)=>{
		console.log(articles);
			articles.destroy();
			res.redirect('/');
	}).catch((err)=>{console.log('error deleting article',err)});
});


route.get('/displayblogs',(req,res) => {
	Article.findAll({
		where: {
			ArticleCategoryId:1
		}
	}).then((articles) => {
		console.log(articles);
		res.render('displayBlog',{articles : articles});
	}).catch((err)=>{console.log('error-2',err)});

});

/*route.get('/displayproductReview',(req,res) => {
	Article.findAll({
		where: {
			ArticleCategoryId:3
		}
	}).then((articles) => {
		console.log(articles);
		res.render('displayproductReviews',{articles : articles});
	}).catch((err)=>{console.log('error-2',err)});
});

route.get('/displayCaresheets',(req,res) => {
	Article.findAll({
		where: {
			ArticleCategoryId:2
		}
	}).then((articles) => {
		console.log(articles);
		res.render('displayCaresheets',{articles : articles});
	}).catch((err)=>{console.log('error-2',err)});
});*/

route.get('/singleDisplay/:id',(req,res) => {
	let id = req.params.id;

	Article.findByPk(id)
	.then((articles) =>{
		res.render('singleDisplay',{articles : articles})
	}).catch((err)=>{console.log('error-5',err)});
});

 /*route.get('/blogDisplay/:id',(req,res) => {
	const id = req.params.id;
	Article.findByPk(id)
	.then((articles) =>{
		res.render('blogDisplay',{articles : articles})
	}).catch((err)=>{console.log('error-5',err)});
});*/


route.post('/upvote/:id',(req,res)=>{
	 let id = req.params.id;
	 let upvote = req.body.upvote;
	 let x;
	Article.findOne({
		where:{id:id}
	}).then((article)=>{
		console.log(Article[0]+"*****************************************************");
	}).catch((err)=>{console.log('edit article error',err)});

 });
/* /////////////////////////////////////////////////////////////////////////  DOWNVOTE  */
 route.post('/downvote/:id',(req,res)=>{
	 let id = req.params.id;
	 let downvote = req.body.downvote;

	 Article.findByPk(id).then((articles)=>{
		 let x = articles.likes - downvote;

		 articles.set({
			 likes:x
		 });
		 articles.save();
		 console.log('downvoted');
	 }).catch((err)=>{console.log('downvote error',err)});
 });

route.get('/test',(req,res)=>{
	res.render('test');
});



module.exports = route;
