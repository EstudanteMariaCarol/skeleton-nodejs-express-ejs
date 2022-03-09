var express = require('express');
var router = express.Router();
const Autor = require ("../models/autor");
/* GET home page. */
router.get("/", async function(req, resp, next) {
  const autores = await Autor.selecionar();
  res.json(autores.routes);
});

module.exports = router;
