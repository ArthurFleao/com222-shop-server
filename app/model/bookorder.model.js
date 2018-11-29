module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('bookorder', {
	  
		custID: {
			type: Sequelize.STRING
		},
    orderDate: {
			type: Sequelize.DATE
		},
	});
	
	return Customer;
}