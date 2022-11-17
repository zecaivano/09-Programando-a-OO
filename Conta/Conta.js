export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Não é possível criar uma conta diretamente. Crie um conta corrente ou poupança!");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        throw new Eror ("O método sacar precisa ser implementado")
    }

    //sobreescrevendo o comportamento de sacar
    _sacar(valor, taxa) {
        const valorCobrado = taxa * valor
        if (this._saldo >= valorCobrado) {
            this._saldo -= valorCobrado;
            return valorCobrado;
        }
        return 0;
    }

    depositar(valor) {
        if(valor <= 0) return; //Técnica do early return
        this._saldo += valor;
    }

    transferir (valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}
