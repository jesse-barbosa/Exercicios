class Livro {
    constructor(_titulo, _autor, _ano, _disponivel = true){
        this.titulo = _titulo
        this.autor = _autor
        this.ano = _ano
        this.disponivel = _disponivel
    }
    mostrarDetalhes(){
        console.log(`
            Título: ${this.titulo}
            Autor: ${this.autor}
            Ano: ${this.ano}
            Disponível: ${this.disponivel ? "Sim" : "Não"}
        `)
    }
    emprestar(){
        if(this.disponivel){
            console.log(`O livro "${this.titulo}" já está emprestado.`)
            return
        }
        this.disponivel = "Não"
        console.log(`O livro "${this.titulo}" foi emprestado com sucesso.`)
    }
    devolver(){
        if(this.disponivel){
            console.log(`O livro "${this.titulo}" já está disponível.`)
            return
        }
        this.disponivel = "Sim"
        console.log(`O livro "${this.titulo}" foi devolvido com sucesso.`)
    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899)
livro1.mostrarDetalhes()

livro1.emprestar()
livro1.mostrarDetalhes()

livro1.devolver()
livro1.mostrarDetalhes()