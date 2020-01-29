module.exports.index = function(application, req, res){
    res.render('index');
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

    res.send('Tudo certo para criar a sessão')


}