// IMPORTAÇÕES DE DEPENDÊNCIAS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// CONFIGURAÇÃO DO CORS, PARA PERMITIR REQUISIÇÕES LOCALHOST
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// IMPORTANDO A CONFIG DO DB
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });

// IMPORTANDO ROTAS
require('./app/route/customer.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("Servidor aberto! Escutando -> http://%s:%s", host, port);
})

function initial(){
}