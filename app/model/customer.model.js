module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('bookcustomers', {
	  
		fname: {
			type: Sequelize.STRING
		},
    lname: {
			type: Sequelize.STRING
		},
    email: {
			type: Sequelize.STRING
		},
    street: {
			type: Sequelize.STRING
		},
    city: {
			type: Sequelize.STRING
		},
    state: {
			type: Sequelize.STRING
		},
    zip: {
			type: Sequelize.STRING
		},
	});
	
	return Customer;
}