var Purchase = require('./purchases');

module.exports = {
	create: function(req, res) {
		var newPurchase = new Purchase(req.body);
		newPurchase.save(function(err, result) {
			if (err) return res.status(500).send(err);
			res.send(result);
		});
	},

	read: function(req, res) {
		console.log('req.query: ', req.query);
		Purchase
		.find(req.query)
		.populate('user')
		.exec(function(err,result) {
			if (err) return res.status(500).send(err);
			res.send(result);
		});
	},

	update: function(req, res) {
		Purchase
		.findByIdAndUpdate(req.params.id, req.body, 
			function(err, result) {
				if (err) return res.status(500).send(err);
				res.send(result);
			});
	},

	delete: function(req, res) {
		Purchase
		.findByIdAndRemove(req.params.id, 
			function(err, result) {
				if (err) return res.status(500).send(err);
				res.send(result);
			});
	}
};

