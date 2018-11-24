const db = require('../config/db.config.js');
const table = db.bookdescriptions;


exports.findAll = (req, res) => {
	table.findAll(
		{
			attributes: ['ISBN', 'title', 'description', 'price', 'publisher', 'pubdate', 'edition', 'pages',]
		}).then(bcats => {
			res.json(bcats);
		});
};
