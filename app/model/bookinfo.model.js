module.exports = (sequelize, Sequelize) => {
	const BookInfo = sequelize.define('view_bookinfo', {
	  categoryID: {
			
			type: Sequelize.INTEGER
		},
	  ISBN: {
			type: Sequelize.INTEGER
		},
	  edition: {
			type: Sequelize.INTEGER
		},
	  pages: {
			type: Sequelize.INTEGER
		},
	  AuthorID: {
			type: Sequelize.INTEGER
		},
	  CategoryName: {
			type: Sequelize.STRING
		},
	  title: {
			type: Sequelize.STRING
		},
	  price: {
			type: Sequelize.FLOAT
		},
	  publisher: {
			type: Sequelize.STRING
		},
	  pubdate: {
			type: Sequelize.STRING
		},
	  nameF: {
			type: Sequelize.STRING
		},
	  nameL: {
			type: Sequelize.STRING
		},


		
	});
	
	return BookInfo;
}



