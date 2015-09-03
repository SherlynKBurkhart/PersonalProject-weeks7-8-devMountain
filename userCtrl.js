var User = require('./user');

module.exports = {
	create: function(req, res) {
		User.create(req.body, function(err, response){
			if(err) return res.status(500).json(err);
			else return res.json(response);
		});
	},

	update: function(req, res) {
		User.findByIdAndUpdate(req.params.id, req.body, 
			function(err, result) {
				if(err) return res.status(500).json(err);
				else return res.json(result);
			});
	},

	delete: function(req, res) {
		User.findByIdAndArchive(req.params.id,
			function(err, result) {
				if (err) return res.status(500).json(err);
				res.json(result);
			});
	}
};