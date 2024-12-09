class ContaBancaria {
    constructor(_id, _nome, _saldo){
        this.id = _id
        this.nome = _nome
        this.saldo = _saldo
    }

    depositar(_valor){
        if(_valor <= 0 ){
            console.log("Valor de depósito inválido.")
            return
        }
        this.saldo += _valor
        console.log(`Depósito de ${_valor}R$ realizado com sucesso.`)
    }

    sacar(_valor){
        if(_valor <= 0 || this.saldo < _valor) {
            console.log("Valor de saque inválido.")
            return
        }
        this.saldo -= _valor
        console.log(`Saque de ${_valor}R$ realizado com sucesso.`)
    }

    exibirSaldo(){
        console.log(`${this.nome}, seu saldo é de ${this.saldo.toFixed(2)}R$.`)
    }

    transferir(_valor, _contaDestinataria){
        if(this.saldo < _valor || _valor <= 0){
            console.log('Valor de transferência inválido')
            return
        }
        this.saldo -= _valor
        _contaDestinataria.saldo += _valor
        console.log(`Transferência de ${_valor}R$ enviada para ${_contaDestinataria.nome}.`)
    }
}

const conta1 = new ContaBancaria("001", "Maria", 1000);
const conta2 = new ContaBancaria("002", "João", 500);

conta1.depositar(200);
conta1.exibirSaldo();

conta1.sacar(300);
conta1.exibirSaldo();

conta1.transferir(400, conta2);
conta1.exibirSaldo();
conta2.exibirSaldo();