// const userRepository = require('../repository/Users')
// import userRepository from '../repository/Users'

let Users = [];

export default {
    cadastrar: (nome, email, senha)=>{
        const verficaUsuario = Users.find(user => user.email === email);
         
        if(verficaUsuario == undefined){
            Users.push({
                nome: nome,
                email: email,
                senha: senha
            })
            return true;
        }else{
            return 'Email já cadastrado'
        }
        
    },

    entrar: (email, senha)=>{
        const verficaEmail = Users.find(user => user.email === email);
        
        if(verficaEmail != undefined){
            if(verficaEmail.senha === senha){
                return true;
            }
        }else{
            return 'Email ou senha incorreto!'
        }
    },
}

