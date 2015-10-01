//exampleFile-406-FacebookViewer-server.js
//exampleFile-325-mini-birds-models-server.js
//exampleFile-GITHUB-JASON DAWSON POLL SERVER.JS, has googleStrategy also
//exampleFile-GITHUB-JARED HANSON'S PASSPORT-FACEBOOK  

// Dependencies
var bodyParser = require('body-parser'), 
	cors = require('cors'),
	express = require('express'),
	session = require('express-session'),
//USE MONGODB- MONGOOSE to store user base and purchases
	mongodb = require('mongodb-core'), 
	mongoose = require('mongoose'),

//USE PASSPORT to login to website
	passport = require('passport'),
// Controllers
 	userCtrl = require('./userCtrl'),
 	purchasesCtrl = require('./purchasesCtrl'),
// Facebook info	
	facebookStrategy = require('passport-facebook').Strategy,
	localStrategy = require('passport-local').Strategy,
	config = require('./config')
	facebookAppId = config.facebookAppId,
	facebookAppSecret = config.facebookAppSecret;

// Connections
var port = process.env.EXPRESS_PORT || 9005;
var mongoUri = 'mongodb://localhost:27017/KasallisDesignStudio';

// Login user 
passport.serializeUser(function(user, done) {
	// input user model (mongoose)
	console.log(111111, user);
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	// output object (json)
	console.log(222222, obj);
	done(null, obj);
});

// passport.uses(new facebookStrategy({
// 	clientID: facebookAppId,
// 	clientSecret: facebookAppSecret,
// 	callbackURL: 'http://localhost:8080/auth/facebook/callback',
// 	enableProof: false
// // },	
// 	function(accessToken, refreshToken, profile, done) {
// 		// userCtrl.findOrCreate({ facebookId: profile.id },
// 		// 	function (err, user) {
// 		// 	}
// 		//);  				
// 		return done();
// 	})
// );

// Middleware
var	app = express();
// Configure Express
app.set('port', (process.env.PORT || 9005))

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('pages/index')
});

app.get('/cool', function(req, res) {
	response.send(cool());
});

app.use(bodyParser.json());
app.use(cors());
app.use(session({
	secret: 'rememberSomeSecret',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook', 
	passport.authenticate('facebook')
);

app.get('/auth/facebook/callback', 
	passport.authenticate('facebook',
	{ successRedirect: '/', failureRedirect: '/' }),
	function(req, res) {
	
	res.redirect('/');
});

app.get('auth/logout', 
	function(req, res){
		req.logout();
		res.redirect('/');
	
});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.redirect('/login')
};

app.get('api/me', function(req, res){
	console.log(333333, req.user);
	res.json(req.user);
});

// Test
app.get('api/session', function(req, res){
	req.session({test: 'this is a test'})
	res.send('check the session');
});

mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));
}); 
