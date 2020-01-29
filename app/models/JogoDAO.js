
function JogoDAO(connection){
   this._connection = connection();
}

JogoDAO.prototype.gerarParemetros = function(usuario){

   //abre a conexão
   this._connection.open( (err, mongoclient) =>  {
      //seleciona a collection
      mongoclient.collection("jogo",(err, collection) => {
         //executa a ação na collection
          collection.insert({
             usuario: usuario,
             moeda: 15,
             suditos: 20,
             temor: Math.floor(Math.random() * 1000),
             sabedoria: Math.floor(Math.random() * 1000),
             magia: Math.floor(Math.random() * 1000)
          });
          mongoclient.close();
      });
  });
}

//export para o consign
module.exports = () => {
   return JogoDAO;
}