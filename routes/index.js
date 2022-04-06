var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");
const Livro = require ("../models/livro");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next){
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
  
});

router.put('/atualizar', async function(req, res, next) {
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
});

router.delete('/deletar', async function(req, res, next) {

  const autor = {
    id: " "
  }
  
  const autores = await Autor.deletar(autor);
  res.json(autores.rows);
});

router.get('/livros', async function(req, res, next) {
  const livros = await Livro.selecionarlivro();
  res.json(livros.rows);
});

router.post('/inserirlivro', async function(req, res, next){
  const livros = await Livro.inserir(req.body);
  res.json(livros.rows);
  
});

router.get('/livrospautor', async function(req, res, next){
  const livros = await Livro.livropautor(req.body);
  res.json(livros.rows);
})

router.put('/atualizarlivro', async function(req, res, next) {
  
  const livros = await Livro.atualizar(req.body);
  res.json(livros.rows);
});

router.get('/deletar', async function(req, res, next) {
  const livros = await Livro.deletar(req.body);
  res.json(livros.rows);
});


module.exports = router;
