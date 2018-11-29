module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
    const bookcategories = require('../controller/bookcategory.controller.js');
    const bookdescriptions = require('../controller/bookdescription.controller.js');
    const bookinfo = require('../controller/bookinfo.controller.js');
    const bookauthor = require('../controller/author.controller.js');
    const bookorders = require('../controller/bookorders.controller.js');
 
    // Customer
    app.post('/api/customers', customers.create); 
    app.get('/api/customers/:customerEmail', customers.findByEmail);
    app.put('/api/customers', customers.update);

    // Categories
    app.get('/api/bookcategories', bookcategories.findAll);

    // Book descriptions
    app.get('/api/bookdescriptions', bookdescriptions.findAll);

    // Book info
    app.get('/api/bookinfo', bookinfo.findAll);
    app.get('/api/bookinfo/busca/:termosBusca', bookinfo.findAllByBusca);
    app.get('/api/bookinfo/:livroISBN', bookinfo.findByISBN);

    // Book Author
    app.get('/api/bookauthor/:ISBN', bookauthor.findAllByISBN);
   
    // Orders
    app.post('/api/bookorder', bookorders.addOrder);
    app.post('/api/bookorderitem', bookorders.addOrderItem);
 
}

