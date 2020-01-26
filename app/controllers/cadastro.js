module.exports.cadastro = (application, req, res) => {
    res.render('cadastro');
}

module.exports.cadastrar = (application, req, res) => {

    var dadosForm = req.body;

    //validacoes
    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário pode ser vazio').notEmpty();
    req.assert('senha', 'Senha pode ser vazio').notEmpty();
    req.assert('casa', 'Casa pode ser vazio').notEmpty();

    //recuperar erros
    const erros = req.validationErrors();

    

    if(erros){
        res.send('existem erros no formulário');
        return;
    }

    res.send('podemos cadastrar')



}