import chai from 'chai';
import http from 'chai-http'; // Extensão da lib chai p/ simular requisições http
import subSet from 'chai-subset'; // Extensao da lib chai p/ verificar objetos

import Item from '../service/Itens.js'

chai.use(http);
chai.use(subSet);

const ItemSchema = {
    nomeItem: nomeItem => nomeItem,
    id: id => id,
}

describe('Teste das funcoes de Itens', ()=>{
    it('novoItem', ()=>{
        Item.novoItem('Correr pela manha')
        const itens = Item.novoItem('Correr pela manha')

        chai.expect(itens.length).to.containSubset(2)
        
    });

    it('mostrarItens', () => {
        const itens = Item.mostrarItens();
      
        chai.expect(itens).to.not.be.null;
      });
      
      it('removerItem', () => {
        const itens = Item.removerItem(1);
      
        chai.expect(itens.length).to.be.equal(1);
      });

})