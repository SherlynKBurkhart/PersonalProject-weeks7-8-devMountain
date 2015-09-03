// LOOK UP IN MONGOOSE FOR SCHEMA SYNTAX 
//profile on user that they can add info
var mongoose = require 'mongoose';
var Schema = mongoose.Schema;

var personSchema = new PersonSchema({
	name: String, 	//first and last required
	email: String,  //@ required
	_id: String,	
	phone: Number,	//three input areas
	streetAddress: String,	
	city: String,
	state: String,	//drop down menu of state abbrev
	zipCode: Number,	//two areas of input
	jewelry: {
		name: String,	
		_id: String,
		photo: Image, 
		jewelryType: String,
		metal: String,
		stones: String,
		status: String,  //drop down menu
		paid: Boolean,
		price: Number,	//this may be a String $......
	}
});

 