const db = require('../config/db.config.js');



exports.addOrderItem = (req, res) => {
	
	db.sequelize.query('INSERT INTO bookorderitems (orderID,ISBN,qty,price) VALUES (:orderID,:ISBN,:qty,:price)',
		{ replacements: { 
			orderID: req.body.orderID,
			ISBN: req.body.ISBN,
			qty: req.body.qty,
			price: req.body.price,
		}, type: db.sequelize.QueryTypes.INSERT}
		
	).then(queryRes => {
		res.json(queryRes);
	});
};

exports.addOrder = (req, res) => {
	
	db.sequelize.query('INSERT INTO bookorders (custID,orderDate) VALUES (:custID,:orderDate)',
		{ replacements: { 
			custID: req.body.custID,
			orderDate: req.body.orderDate,
		}, type: db.sequelize.QueryTypes.INSERT}
		
	).then(queryRes => {
		res.json(queryRes);
	});
};

