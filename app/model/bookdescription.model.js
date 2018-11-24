module.exports = (sequelize, Sequelize) => {
	const BookDescription = sequelize.define('bookdescription', {
	  ISBN: {
			type: Sequelize.INTEGER
	  },
	  title: {
			type: Sequelize.STRING
	  },
	  description: {
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
	  edition: {
			type: Sequelize.INTEGER
	  },
	  pages: {
			type: Sequelize.INTEGER
	  },
	});
	
	return BookDescription;
}