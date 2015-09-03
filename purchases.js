var mongoose = require('mongoose');
var jewelrySchema = require('./jewelry.js');

var purchasesSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	jewelry: [jewelrySchema]
});

module.exports = mongoose.model('Purchase', purchasesSchema);

