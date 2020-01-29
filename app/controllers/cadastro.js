module.exports.cadastro = (application, req, res) => {
    res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = (application, req, res) => {

    var dadosForm = req.body;

    //validacoes
    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário pode ser vazio').notEmpty();
    req.assert('senha', 'Senha pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    //recuperar erros
    var erros = req.validationErrors();
    if(erros){
        res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    //conexão banco
    var connection = application.config.dbConnection;
    console.log(connection);
    
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    var JogoDAO = new application.app.models.JogoDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);
    JogoDAO.gerarParemetros(dadosForm.usuario);

    //geração dos parâmetros


    res.send('podemos cadastrar');


}