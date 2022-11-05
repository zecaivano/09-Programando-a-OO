import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroContas = 0;
    agencia;
    
    #cliente;
    #saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }
    get cliente() {
        return this.#cliente;
    }
    get saldo() {
        return this.#saldo
    }

    constructor (agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente; //Aqui usei o acessor setter cliente
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if(valor <= 0) return; //Técnica do early return
        this.#saldo += valor;
    }

    transferir (valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}