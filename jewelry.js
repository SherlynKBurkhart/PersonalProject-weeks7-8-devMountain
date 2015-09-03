var mongoose = require('mongoose');

var jewelrySchema = new mongoose.Schema({
	name: { 
		type: String, 
		uppercase: true, 
		required: true },
	order: { 
		type: String, 
		lowercase: true, 
		required: true}
});

module.exports = mongoose.model('jewelrySchema', jewelrySchema);

