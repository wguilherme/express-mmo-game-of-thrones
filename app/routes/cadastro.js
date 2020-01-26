module.exports = function(application){

    //view
    application.get('/cadastro', function(req,res){
        application.app.controllers.cadastro.cadastro(application, req, res);
    })

    //cadastro
    application.post('/cadastrar', function(req,res){
        application.app.controllers.cadastro.cadastrar(application, req, res);
    })
}
