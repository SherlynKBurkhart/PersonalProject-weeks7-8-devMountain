//exampleFile-406-FacebookViewer-server.js
//exampleFile-325-mini-birds-models-server.js
//exampleFile-GITHUB-JASON DAWSON POLL SERVER.JS, has googleStrategy also
//exampleFile-GITHUB-JARED HANSON'S PASSPORT-FACEBOOK  

// Dependencies
var bodyParser = require('body-parser'), 
	cool = require('cool-ascii-faces'),
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
	facebookAppId = "1503215263303896",
	facebookAppSecret = "8e1684e7eff2add24e0d164016996655";

// Connections
var port = 9005;
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

passport.use(new facebookStrategy({
	clientID: facebookAppId,
	clientSecret: facebookAppSecret,
	callbackURL: 'http://localhost:8080/auth/facebook/callback',
	enableProof: false
},	
	function(accessToken, refreshToken, profile, done) {
		// userCtrl.findOrCreate({ facebookId: profile.id },
		// 	function (err, user) {
		// 	}
		//);  				
		return done();
	})
);



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

//THIS COMES FROM JASONDAWSON POLL SERVER.JS
//DO I USE? WHY?
// // Add headers
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
  
//     next();
// });


// Endpoints
// app.get('/', 
// 	function(req, res){
// 	res.render('index', { user: req.user });
// });

// app.get('/account', ensureAuthenticated, 
// 	function(req, res){
// 	res.render('account', { user: req.user });
// });

// app.get('/login', 
// 	function(req, res){
// 	res.render('login', { user: req.user });
// });

app.get('/auth/facebook', 
	passport.authenticate('facebook')
);

app.get('/auth/facebook/callback', 
	passport.authenticate('facebook',
	{ successRedirect: '/', failureRedirect: '/' }),
	function(req, res) {
		// //THIS WAS IN JASONDAWSON POLL
		//DO I NEED?
		// user.getUser(req.user.id).then(
		// function(userProfile) {
  //   		currentUser = userProfile;
  //   	})
	res.redirect('/');
});

app.get('auth/logout', 
	function(req, res){
		req.logout();
		res.redirect('/');
		// OR FROM JASOND POLL
		//currentUser = ();
		//res.status(200).end();
		//REPLACES res.redirect('/');
});

// //FROM JASONDAWSON POLL
// I HAVE NOTHING LIKE THIS, DO I NEED IT?
// app.get('/auth/currentUser', function(req, res) {
//   if (req.user) {
//   User.getUser(req.user.id).then(function(response) {
//       console.log('currentUser api check:');
//       console.log(req.user.name);
//       res.status(200).json(response);
//     });
//   } else {
//     res.end();
//   }
// });

//I ALSO HAVE DIFFERENT ENDPOINTS THAN JASONDAWSON


function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) { return next(); }
	res.redirect('/login')
};

//AND...DO I NEED THESE?
// app.post('/user', userCtrl.create);
// app.get('/user', userCtrl.read);
// app.put('/user/:id', userCtrl.update);
// app.delete('/user/:id', userCtrl.delete);

// app.post('/purchases', purchaseCtrl.create);
// app.get('/purchases', purchasesCtrl.read);
// app.put('/purchases/:id', purchasesCtrl.update);
// app.delete('/purchases/:id', purchasesCtrl.delete);

app.get('api/me', function(req, res){
	console.log(333333, req.user);
	res.json(req.user);
});

// Test
app.get('api/session', function(req, res){
	req.session({test: 'this is a test'})
	res.send('check the session');
});

// mongoose.connect(mongoUri);
// mongoose.connection.once('open', function() {
// 	console.log('Connected to MongoDB at ', mongoUri);
// });
// //THIS IS JASONDAWSON'S CODE
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));
}); 
// Use Postman to verify that you can in fact 
//get the JSON data from the `/me` endpoint.

