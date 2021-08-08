// Load Node modules
const express = require('express');
// Initialise using express
const app = express();
// assign use of express 
app.use(express.urlencoded({extended: true}))
// use json to parse incoming request
.use(express.json()) 
// set the static file html folder for express to 'views'
.use(express.static(__dirname + '/views'))
// Render static files
.use(express.static('public'));
// Port website will run on
app.listen(process.env.PORT||3000);
// require ejs
const ejs = require('ejs');

// Set the view engine to ejs
app.set('view engine', 'ejs');
// set the root page when server starts
app.get('/', function (req, res) {
    res.render('pages/about/about');
    console.log('we running now! catch up!');
})
// routes for get
.get('/flashcards', function(req, res)  {
    res.render('pages/flashcard/flashcards');
})

.get('/calendars', function(req, res)  {
    res.render('pages/calendar/calendars');
})

.get('/index', function(req, res)  {
    res.render('pages/index');
});









