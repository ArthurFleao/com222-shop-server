module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('bookorders', {

		ISBN: {
			type: Sequelize.STRING
		},
		price: {
			type: Sequelize.FLOAT
		},
		qty: {
			type: Sequelize.INTEGER
		},
	});

return Customer;
}