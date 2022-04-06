const db = require("../db")

class Livro{
  static async inserirlivro(data){
    const connect = await db.connect();
    const sql = "insert into livros(autor, titulo, editora, data_publicacao, preco) values($1,$2,$3,$4,$5)";
    const values = [data.autor, data.titulo, data.editora, data.data_publicacao, data.preco]
  return await 
connect.query(sql, values);
  }
  static async selecionarlivro(){
    const connect = await db.connect();
    return await connect.query("select * from livros order by id asc");
  }
  static async atualizarlivro(data){
    const connect = await db.connect();
    const sql = "update livros set autor = $1, titulo = $2, editora = $3, data_publicacao = $4, preco = $5 where id = $6";
    const values = [data.autor, data.titulo, data.editora, data.data_publicacao, data.preco, data.id];
    return await connect.query(sql, values);
  }
  static async deletarlivro(data){
    const connect = await db.connect();
    const sql = "delete from livros where id = $1";
    const values = [data.id];
    return await connect.query(sql, values);
  }
  static async livropautor(data){
  const connect = await db.connect();
  const sql = "select * from livros where autor_id = $1"
  const values = [data.autor];
  return await connect.query(sql, values);
  }
  }

module.exports = Livro;  