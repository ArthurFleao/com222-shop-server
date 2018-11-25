module.exports = (sequelize, Sequelize) => {
	const Author = sequelize.define('view_author', {
	  AuthorID: {
			type: Sequelize.INTEGER
	  },
	  nameF: {
			type: Sequelize.STRING
	  },
	  nameL: {
			type: Sequelize.STRING
	  },
	});
	
	return Author;
}