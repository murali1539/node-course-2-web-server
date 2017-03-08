const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partial');
app.set('view engine',hbs);
app.use(express.static(__dirname + '/public'));

// app.use((req,res,next) => {
// 	res.render('maintain.hbs',{
// 		pageTitle : 'Under Maintenance'
// 	});
// });

hbs.registerHelper('getCurrentYear',() => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text) => {
	return text.toUpperCase();
});

app.get('/',(req,res) => {
	res.render('home.hbs',{
		pageTitle : 'Home Page',
		welcomeMessage : 'Welcome to my first node app',
		currentYear : new Date().getFullYear()
	})
});

app.get('/about',(req,res) => {
	res.render('about.hbs',{
		pageTitle : 'About Page',
		currentYear : new Date().getFullYear()
	});
});

app.get('/projects',(req,res) => {
	res.render('projects.hbs',{
		pageTitle : 'Projects Page',
		currentYear : new Date().getFullYear()
	});
});

app.get('/bad',(req,res) => {
	res.send({
		code : 403,
		errorMessage : 'Unauthorised'
	})
});

app.listen(port,()=>{
	console.log(`Server is up on port ${port}`);
});