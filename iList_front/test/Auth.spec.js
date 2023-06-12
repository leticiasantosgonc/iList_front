import chai from 'chai';
import http from 'chai-http'; // Extensão da lib chai p/ simular requisições http
import subSet from 'chai-subset'; // Extensao da lib chai p/ verificar objetos

import Auth from '../service/Auth.js'

chai.use(http);
chai.use(subSet);

const AuthSchema = {
    nome: nome => nome,
    email: email => email,
    senha: senha => senha
}

describe('Teste das funcoes de Auth', ()=>{
    it('Cadastrar', ()=>{
        const userCadastrado = Auth.cadastrar('lucas', 'lucaspalves@gmail.com', '1234567')

        chai.expect(userCadastrado).to.containSubset(true)
    });

    it('CadastrarEmailRepetido', ()=>{
        Auth.cadastrar('lucas', 'lucaspalves@gmail.com', '1234567')
        const userCadastrado = Auth.cadastrar('lucas', 'lucaspalves@gmail.com', '1234567')

        chai.expect(userCadastrado).to.containSubset('Email já cadastrado')
    });

    it('Entrar', ()=>{
        const userLogado = Auth.entrar('lucaspalves@gmail.com', '1234567')

        chai.expect(userLogado).to.containSubset(true)
    });

})