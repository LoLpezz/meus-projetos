'use strict'

var readlineSync = require("readline-sync") //vai permitir usar a biblioteca do readlineSync
var opcao
var strData, dataPartes, data, insevento, palestrante, participantes, idade = 18, quantParticipantes = 100, quantEventos, quantPalestrante, PAtual
const listaEvento = [], listaPalestrante = [], listaParticipantes = []


do{
    console.log() //serve para pular linha
    console.log("\t ****Sistema Cadastro de Eventos****")
    console.log("\t 1 - Cadastrar Evento")
    console.log("\t 2 - Cadastrar Palestrantes")
    console.log("\t 3 - Cadastrar Participantes")
    console.log("\t 4 - Listar evento")
    console.log("\t 5 - Listar Palestrantes")
    console.log("\t 6 - Listar Participantes")
    console.log("\t 0 - Sair\n")

    opcao = readlineSync.question("\tDigite um numero: ")

    switch(opcao){
        case "1"://Cadastrar evento
        console.log("\t Cadastro de evento")
        strData = readlineSync.question("Digite uma data (dd/mm/yyyy): ")
        dataPartes = strData.split("/")//vai quebrar a data em partes
        data = new Date(dataPartes[2], dataPartes[1] - 1, dataPartes[0])
        if (data < new Date()){
            console.log("Data invalida, digite novamente!")
        }else{
            insevento = readlineSync.question("Digite o nome do evento: ")
            listaEvento.push(insevento)//push vai adicionar uma ou mais elementos ao final de uma array(lista) e retornar o novo comprimento desse array
        }
            break
        case "2": //cadastro de palestrante
        console.log("\t Cadastro de Palestrante")
        palestrante = readlineSync.question("Digite seu nome: ")
        listaPalestrante.push(palestrante)
        console.log("Palestrante cadastrado com sucesso!")

            break//O break é para que não contiue lendo e comparando as outras condições, jé encontrou a condição 
        case "3"://Cadastro de participantes
        console.log("\t Cadastro de Participantes")
        participantes = readlineSync.question("Digite seu nome: ")
        idade = readlineSync.question("Digite sua idade: ")
        quantParticipantes = listaParticipantes.length 
        if (quantParticipantes < listaParticipantes){
            listaParticipantes.push(participantes)
        } 
        if (idade >= 18){
        console.log("Participante cadastrado com sucesso!")
        }else{
            listaParticipantes.push(participantes)
            console.log("Não é permitido participantes menor de 18 anos!!")
        }
            break
        case "4":
            console.log("\t Lista de Eventos")
            quantEventos = listaEvento.length
            console.log("Tem " + quantEventos + " evento(s) cadastrado até o momento!")
            console.log('O nome do evento é: ' + listaEvento[0])
            break
        case "5":
            console.log("**Lista de Palestrante**")
            quantPalestrante = listaPalestrante.length
            console.log("Tem " + quantPalestrante + " palestrante cadastrado!")
            console.log("O nome do palestrante é: " + listaPalestrante[0])
            break
        case "6":
            console.log("**Lista de Participantes**")
            quantParticipantes = listaParticipantes.length
            console.log("Tem " + quantParticipantes + " participante cadastrado!")
            for (let indice = 0; indice < quantParticipantes; indice ++){
                const pAtual = listaParticipantes[indice]
                console.log("O participante " + (indice + 1) + "é: " + pAtual)
            }
            break
        case "0":
            console.log("\n")
            console.log("Obrigado por usar nosso sistema!")
            break
            
        default:
            console.log("\t Invalido, tente novamente!") //com o default pode definir qual os comoandos que vão ser executados caso não cai em nenhuma das condições 
    }

}while(opcao != 0)