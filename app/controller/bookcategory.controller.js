const db = require('../config/db.config.js');
const BookCategory = db.bookcategories;


exports.findAll = (req, res) => {
	BookCategory.findAll(
		{
			attributes: ['CategoryID', 'CategoryName']
		}).then(bcats => {
			res.json(bcats);
		});
};
