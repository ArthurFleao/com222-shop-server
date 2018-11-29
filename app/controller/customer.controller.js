const db = require('../config/db.config.js');
const Customer = db.customers;

// Post a Customer
exports.create = (req, res) => {	
	
	db.sequelize.query('INSERT INTO bookcustomers (fname,lname,email,street,city,state,zip) VALUES (:fname,:lname,:email,:street,:city,:state,:zip)',
		{ replacements: { 
			fname: req.body.fname,
			lname: req.body.lname,
			email: req.body.email,
			street: req.body.street,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
		}, type: db.sequelize.QueryTypes.INSERT}
		
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

 
// Fetch all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
	  res.json(customers);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId).then(customer => {
		res.json(customer);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	let id = req.body.id;
	Customer.update(customer, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};