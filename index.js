import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const cliente1 = new Cliente("Ricardo",11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca (50, cliente1, 1001)
const contaSalario = new ContaSalario (cliente1)

const diretor = new Diretor ("Rodrigo", 10000, 1234678999);
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Ricardo", 5000, 78945612398);
gerente.cadastrarSenha("123")
const cliente = new Cliente ("Lais", 78945612379, "456")

const gerenteEstaLogado = SistemaAutenticacao.login (gerente, "123")
const diretorEstaLogado = SistemaAutenticacao.login (diretor, "123456")
const clienteEstaLogado = SistemaAutenticacao.login (cliente, "456")
console.log(clienteEstaLogado, diretorEstaLogado, gerenteEstaLogado);