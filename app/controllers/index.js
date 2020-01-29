module.exports.index = function(application, req, res){


    if (req.session.autorizado){
    
        res.redirect('jogo')
    } else {
        res.render('index', {validacao: {}});
    }


    
}

module.exports.autenticar = function(application, req, res){
    
    //pegar os dados do form
    var dadosForm = req.body;

    req.assert('usuario', 'Usuário não pode ser vazio' ).notEmpty();
    req.assert('senha', 'Senha não pode ser vazio' ).notEmpty();

    var erros = req.validationErrors();

    if (erros){

        res.render('index', {validacao: erros});
        return;
    }

    //método de autenticação
    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    //chama a função e envia os dados do Form
    UsuariosDAO.autenticar(dadosForm, req, res);

    // res.send('Tudo certo para criar a sessão')


}