class Produto {
    // Adicionar
    constructor(_nome, _preco, _quantidadeEstoque){
        this.nome = _nome
        this.preco = _preco
        this.quantidade = _quantidade
    }

    // Ver detalhes
    mostrarDetalhes(){
        console.log(`
            Nome: ${this.nome}
            Preço: ${this.preco}    
            Quantidade: ${this.quantidade}    
        `)
    }

    // Alterar preço
    atualizarPreco(_novoPreco){
        this.preco = _novoPreco
    }
    // Alterar estoque
    atualizarEstoque(_estoque){
        this._quantidadeEstoque = _estoque
    }
}

const produto1 = new Produto("Garrafa", 20, 16)
produto1.mostrarDetalhes()

produto1.atualizarPreco(25)
produto1.atualizarEstoque(15)
produto1.mostrarDetalhes()