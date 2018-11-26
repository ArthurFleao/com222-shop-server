module.exports = (sequelize, Sequelize) => {
	const BookCategory = sequelize.define('view_categories', {
	  categoryId: {
			type: Sequelize.INTEGER
	  },
	  categoryName: {
			type: Sequelize.STRING
	  },
	});
	
	return BookCategory;
}