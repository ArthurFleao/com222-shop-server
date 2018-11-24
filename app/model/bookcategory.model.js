module.exports = (sequelize, Sequelize) => {
	const BookCategory = sequelize.define('bookcategory', {
	  categoryId: {
			type: Sequelize.INTEGER
	  },
	  categoryName: {
			type: Sequelize.STRING
	  },
	});
	
	return BookCategory;
}