const db = require('../config/db.config.js');
const table = db.bookdescriptions;


exports.findAll = (req, res) => {
	table.findAll(
		{
			attributes: ['ISBN', 'title', 'description', 'price', 'publisher', 'pubdate', 'edition', 'pages',]
		}).then(queryRes => {
			res.json(queryRes);
		});		
};


exports.findAllByCategory = (req, res) => {
	table.findAll(
		{
			attributes: ['ISBN', 'title', 'description', 'price', 'publisher', 'pubdate', 'edition', 'pages',],
			include: [{
				model: BookCategory,
				where: { ISBN: Sequelize.col('bookdescription.ISBN') }
			}]
		}).then(queryRes => {
			res.json(queryRes);
		});		
};

