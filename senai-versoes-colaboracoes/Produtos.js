'use strict'

var readlineSync = require ("readline-sync")
var opcao, peca, peso, quantDePecas = 10, quantLetras = 3, nome
const listaDePecas = [], listaDeLetras = []


do{
    console.log()
    console.log('\t --*Sistema de Cadastro de Peça*--')
    console.log("\t 1 - Nome da peça")
    console.log('\t 2 - Peso da peça')
    console.log("\t 3 - Quantidade de peças")

    opcao = readlineSync.question("Digite o numero que deseja: ")
    
    switch (opcao){
        case "1": //Nome da peça
        console.log("\t Nome do Produto")
        peca = readlineSync.question("Tem mais de 3 caracteres?")
        nome = readlineSync.question("Digite o nome: ")
        quantLetras = listaDeLetras.length

        if (quantLetras < listaDeLetras){
            listaDeLetras.push(peca)
            //console.log("Invalido, apenas nomes acima de 3 caracteres!")
        }
        if (nome < 3){
            console.log("Nome cadastrado com sucesso!")

        }else{
            listaDeLetras.push(peca)
            console.log("Invalido, apenas nomes acima de 3 caracteres!")
        }
        
            break
        case "2": //Peso da peça
        console.log("\t Peso do Produto")
        peso = readlineSync.question("Digite o peso do produto: ")
        if (peso >= 100){
            console.log("Cadastrado com sucesso!")
        }else{
            console.log("Peso deve ser acima de 100g, tente novamente!")
        }

            break
        case "3": //Quantidade de produto
        console.log("Quanditade do Produto Permitido: 10")
        quantDePecas = readlineSync.question("Digite quantos produtos dejesa adicionar: ")
        if (quantDePecas < 10){
            console.log("Cadastrado com sucesso!!")
        }else{
            console.log("Capacidade maxima atingida!")
        }
            break
        case "0": //Sair do sistema
        console.log("\n")
        console.log("Sair")
            break

        default:
        console.log("\t Comando invalido, digite novamente!")
    }
}while (opcao != 0)