class Turma {
    constructor(_turma){
        this.turma = _turma
        this.alunos = []
    }
    
    adicionarAluno(_nomeAluno){
        const alunoExistente = this.alunos.find(aluno => aluno.nome === _nomeAluno)
        if(alunoExistente){
            console.log(`Aluno(a) ${_nomeAluno} já existe`)
            return
        }
        const novoAluno = {
            nome: _nomeAluno,
            notas: []
        }
        this.alunos.push(novoAluno)
        console.log(`Aluno(a) ${_nomeAluno} adicionado com sucesso`)
    }

    adicionarNota(_nomeAluno, _nota){
        const alunoExistente = this.alunos.find(aluno => aluno.nome === _nomeAluno)
        if(!alunoExistente){
            console.log(`Aluno(a) ${_nomeAluno} não existe`)
            return
        }
        alunoExistente.notas.push(_nota)
        console.log(`Nota ${_nota} adicionada para aluno(a) ${_nomeAluno}`)
    }

    calcularMedia(_nomeAluno){
        const alunoExistente = this.alunos.find(aluno => aluno.nome === _nomeAluno)
        if(!alunoExistente){
            console.log(`Aluno(a) ${_nomeAluno} não existe`)
            return
        }
        const quantidadeNotas = alunoExistente.notas.length
        let somaNotas = 0
        
        for(let i = 0; i < quantidadeNotas; i++){
            somaNotas += alunoExistente.notas[i]
        }

        const mediaNotas = somaNotas / quantidadeNotas
        return(mediaNotas)
    }

    exibirAprovados(_mediaMinima){
        let aprovados = []
        this.alunos.forEach(aluno => {
            if(this.calcularMedia(aluno.nome) >= _mediaMinima){
                aprovados.push(aluno.nome)
            }
        });
        console.log(`Lista de alunos aprovados:
            ${aprovados}
        `)
    }
}

const turma = new Turma("9º Ano");

turma.adicionarAluno("Alice");
turma.adicionarAluno("Bruno");

turma.adicionarNota("Alice", 8);
turma.adicionarNota("Alice", 9);
turma.adicionarNota("Bruno", 5);
turma.adicionarNota("Bruno", 6);

console.log(turma.calcularMedia("Alice"));
console.log(turma.calcularMedia("Bruno"));

turma.exibirAprovados(6); 