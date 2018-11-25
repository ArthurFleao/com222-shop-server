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
					'publisher',
					'pubdate',
					'edition',
					'pages',
					]
		}).then(bcats => {
			res.json(bcats);
		});
};
exports.findAllByBusca = (req, res) => {
	table.findAll(
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
					'pages',],
					where: {
						title:{
							[Op.like]: '%'+req.params.termosBusca+'%'
						}
					}
					
		}).then(bcats => {
			res.json(bcats);
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

		}).then(bcats => {
			res.json(bcats);
		});
};
