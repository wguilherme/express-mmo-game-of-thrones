function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function (usuario) {
    this._connection.open( (err, mongoclient) =>  {
        mongoclient.collection("usuarios",(err, collection) => {
            collection.insert(usuario);
            mongoclient.close();
        });
    });
}


//necessário passar o req para que use utilize na session
UsuariosDAO.prototype.autenticar = function (usuario, req, res) {

    //pesquisa dentro do banco
    //verificar se existe as informações requisitadas

    this._connection.open( (err, mongoclient) =>  {
        mongoclient.collection("usuarios",(err, collection) => {

            //busca usuário igual enviado
            //find retornar um cursor, precisamos converter 
            collection.find(usuario).toArray(function(err, result){
               
                //retonar objeto do usuário
                if (result[0] != undefined){
                    req.session.autorizado = true;
                }

                if (req.session.autorizado){
                    res.send('usuário foi encontrado no banco de dados')
                } else {
                    res.send('usuário não existe no banco de dados')
                }


            });

            mongoclient.close();
        });
    });


}
module.exports = () => {
    return UsuariosDAO;
}