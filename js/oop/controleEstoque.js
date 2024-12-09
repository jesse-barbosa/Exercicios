class Estoque {
    constructor(){
        this.produtos = []
    }
    // Adicionar
    adicionarProduto(_nome, _quantidade, _precoUnid){
        const produtoExistente = this.produtos.find(produto => produto.nome === _nome)
        if(produtoExistente){
            produtoExistente.quantidade += _quantidade;
            console.log(`${_quantidade} unidades de ${_nome} adicionadas ao estoque`)
        }
        else {
            const novoProduto = {
                nome: _nome,
                quantidade: _quantidade,
                precoUnid: _precoUnid
            }
            this.produtos.push(novoProduto)
            console.log(`${_nome} adicionado ao estoque com ${_quantidade} unidades`)
        }
    }
    atualizarQuantidade(_nome, _quantidade){
        const produtoExistente = this.produtos.find(produto => produto.nome === _nome)
        if(produtoExistente){
            produtoExistente.quantidade += _quantidade
            console.log(`Estoque de ${_nome} atualizado com ${_quantidade} unidades`)
        } else {
            console.log(`Produto "${_nome}" não encontrado no estoque`)
        }
    }
    mostrarDetalhes(_nome){
        const produtoExistente = this.produtos.find(produto => produto.nome === _nome)
        if(produtoExistente){
            console.log(`
            Nome: ${produtos._nome}
            Quantidade: ${produtos._nome.quantidade}    
            Preço Unidade: ${produtos._nome.precoUnid}    
            `)
        } else {
            console.log(`Produto "${_nome}" não encontrado no estoque`)
        }
    }
    exibirValorTotal(){
        let precoTotal = 0
        this.produtos.forEach(element => {
            precoTotal += produto.precoUnid * produto.quantidade
        });
        console.log(`Valor total em estoque: R$${precoTotal.toFixed(2)}`);
    }
}

const estoque = new Estoque();

estoque.adicionarProduto("Camiseta", 100, 50);
estoque.adicionarProduto("Calça", 50, 100);

estoque.atualizarQuantidade("Camiseta", 20);
estoque.atualizarQuantidade("Calça", -10);

estoque.mostrarDetalhes("Camiseta");
estoque.exibirValorTotal();