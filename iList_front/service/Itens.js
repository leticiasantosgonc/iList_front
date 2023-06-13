// const userRepository = require('../repository/Users')
// import userRepository from '../repository/Users'

let Itens = [];

export default {
    novoItem: (nomeItem)=>{
        const itemRecuperado = Itens[Itens.length -1]
        
        const nome = nomeItem.trim()

        if(nome.length > 0){            
            if(itemRecuperado == undefined){
                Itens.push({
                    nomeItem: nomeItem,
                    id: 0 
                });
            }else{
                Itens.push({
                    nomeItem: nomeItem,
                    id: itemRecuperado.id + 1
                });
            }        
        }

        return Itens;
    },

    mostrarItens: ()=>{
        return Itens;
    },

    removerItem: (id)=>{
        for (let i = 0; i < Itens.length; i++) {
            if (Itens[i].id == id) {
                Itens.splice(i, 1);
                break;
            }
          }
        return Itens;
    },
}

