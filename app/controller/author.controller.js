const db = require('../config/db.config.js');
const table = db.bookauthors;


exports.findAllByISBN = (req, res) => {
	table.findAll(
		{
			attributes: ['AuthorID', 'nameF', 'nameL'],
			where:{
				ISBN:req.params.ISBN
			}
		}).then(bcats => {
			res.json(bcats);
		});
};
