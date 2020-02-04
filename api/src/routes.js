const express = require("express");


const auth = require('./controllers/authController')
const project = require('./controllers/projectController');
const produto =require('./controllers/produtoController')

const routes = express.Router();
const middlewares = require('./middlewares/auth')

/*
req.query = Acessar query params (para filtros)
req.params = Acessar route params (para edição, delete)
req.body = Acessar corpo da requisição (criação, edição de registros)
*/

routes.post("/projects",middlewares,project.prject);

routes.post("/auth/register", auth.register);
//routes.post("/auth/authenticate", auth.authenticate); 

routes.post("/produtos/registrar", produto.registrar);

module.exports = routes;