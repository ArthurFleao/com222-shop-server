module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
    const bookcategories = require('../controller/bookcategory.controller.js');
    const bookdescriptions = require('../controller/bookdescription.controller.js');
    const bookinfo = require('../controller/bookinfo.controller.js');
 
    // Create a new Customer
    app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:customerId', customers.findById);
 
    // Update a Customer with Id
    app.put('/api/customers', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', customers.delete);

    app.get('/api/bookcategories', bookcategories.findAll);

    app.get('/api/bookdescriptions', bookdescriptions.findAll);

    app.get('/api/bookinfo', bookinfo.findAll);

    app.get('/api/bookinfo/:livroISBN', bookinfo.findByISBN);
}