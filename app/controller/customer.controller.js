const db = require('../config/db.config.js');
const Customer = db.customers;


exports.create = (req, res) => {

	db.sequelize.query('INSERT INTO bookcustomers (fname,lname,email,street,city,state,zip) VALUES (:fname,:lname,:email,:street,:city,:state,:zip)',
		{
			replacements: {
				fname: req.body.fname,
				lname: req.body.lname,
				email: req.body.email,
				street: req.body.street,
				city: req.body.city,
				state: req.body.state,
				zip: req.body.zip,
			}, type: db.sequelize.QueryTypes.INSERT
		}

	).then(queryRes => {
		res.json(queryRes);
	});
};


exports.findByEmail = (req, res) => {
	db.sequelize.query('SELECT * FROM bookcustomers bc WHERE bc.email = :email',
		{ replacements: { email: req.params.customerEmail }, type: db.sequelize.QueryTypes.SELECT }

	).then(queryRes => {
		res.json(queryRes);
	});
};
// Update a Customer
exports.update = (req, res) => {
	db.sequelize.query('UPDATE bookcustomers bc SET bc.fname = :fname, bc.lname = :lname, bc.email = :email, bc.street = :street, bc.city = :city, bc.state = :state, bc.zip = :zip WHERE bc.custID = :custID',
		{
			replacements: {
				custID: req.body.custID,
				fname: req.body.fname,
				lname: req.body.lname,
				email: req.body.email,
				street: req.body.street,
				city: req.body.city,
				state: req.body.state,
				zip: req.body.zip,
			}, type: db.sequelize.QueryTypes.INSERT
		}

	).then(queryRes => {
		res.json(queryRes);
	});
};
