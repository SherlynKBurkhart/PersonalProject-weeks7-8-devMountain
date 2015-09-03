var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

	email: { 
		type: String, 
		required: true, 
		unique: true },
	username: { 
		type: String, 
		require: true },
	updated_at: { 
		type: Date, 
		default: Date.now },
});

userSchema.pre('update', function(){
	this.updated_at = new Date();
	next();
});

var User = mongoose.model('User', userSchema);

User.findByIdAndUpdate('PUT THE ID# HERE', {level: 100}),

module.exports = User;

