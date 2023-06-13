import express from 'express'
import bodyParser from 'body-parser';

import Auth from './service/Auth.js'
import Item from './service/Itens.js'


const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs'); 

//Autenticação

app.get('/', function(req, res){
    res.render('login')
})

app.get('/cadastrar', function(req, res){
    res.render('cadastrar')
})

app.post('/cadastrar', function(req, res){
    const { nome, email, senha } = req.body;

    if(Auth.cadastrar(nome, email, senha)){
        res.redirect('/')
    }else{
        res.redirect('/cadastrar')
    }
    
    
})

app.post('/entrar', function(req, res){
    const { email, senha } = req.body;

    if(Auth.entrar(email, senha)){
        res.redirect('/lista')
    }else{
        res.redirect('/')
    }
    
})

//Itens
app.get('/lista', function(req, res){
    const itens = Item.mostrarItens()

    console.log(itens)

    res.render('lista', {
        itens: itens
    });
})

app.post('/novoItem', function(req, res){
    const { nomeItem } = req.body;

    Item.novoItem(nomeItem)

    res.redirect('/lista')
})

app.get('/verItens', function(req, res){
    res.status(201)
        .json(Item.mostrarItens())
})

app.post('/deletarItem/:id', function(req, res){
    const { id } = req.params;

    Item.removerItem(id)

    console.log("id: " + id)

    res.redirect('/lista')
})

// app.post('/cadastrar', (req, res)=>{
//     res.status(201)
//         .json(Auth.cadastrar(req.body.nome, req.body.email, req.body.senha))
// })

// app.post("/login", (req, res)=>{

// console.log(req.body)

//     const { email, senha } = req.body;

// console.log(email)

//     res.status(201)
        
//         .json(Auth.entrar(req.body.email, req.body.senha))
// })


app.listen(3008, () =>{
    console.log("Servidor rodando")
})



