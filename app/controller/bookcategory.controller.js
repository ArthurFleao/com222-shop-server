const db = require('../config/db.config.js');
const BookCategory = db.bookcategories;


exports.findAll = (req, res) => {
	db.sequelize.query('SELECT DISTINCT CategoryID, CategoryName FROM view_categories ORDER BY CategoryName ASC',
	{ type: db.sequelize.QueryTypes.SELECT }
		).then(queryRes => {
			res.json(queryRes);
		});
};


