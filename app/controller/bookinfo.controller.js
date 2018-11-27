const db = require('../config/db.config.js');
const table = db.bookinfo;
const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
	table.findAll(
		{
			attributes:
				['CategoryID',
					'CategoryName',
					'ISBN',
					'title',
					'description',
					'price',
				],
			order: ['title'],
		}).then(queryRes => {
			res.json(queryRes);
		});
};
exports.findAllByBusca = (req, res) => {

	db.sequelize.query('SELECT DISTINCT title, ISBN, description FROM view_bookinfos WHERE title like :termosBusca ORDER BY title ASC',
		{ replacements: { termosBusca: '%'+req.params.termosBusca+'%' }, type: db.sequelize.QueryTypes.SELECT }
		
	).then(queryRes => {
		res.json(queryRes);
	});
};

exports.findByISBN = (req, res) => {
	table.find(
		{
			attributes:
				['CategoryID',
					'CategoryName',
					'ISBN',
					'title',
					'description',
					'price',
					'publisher',
					'pubdate',
					'edition',
					'pages',
				],

			where: {
				ISBN: req.params.livroISBN
			}

		}).then(queryRes => {
			res.json(queryRes);
		});
};
