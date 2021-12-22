
var dataDoEvento = 1
var dataAtual 
var cadastroPalestrante = []
var listaParticipants = 99
var idadeParticipantes = 18
const readlineSync = require ('readline-sync')

dataAtual = readlineSync.question('Digite a data do evento: ')

if (dataDoEvento > dataAtual){
	console.log("Cadastro permitido!")
}else{
	console.log('Data invalida, informe outra data!')
}

if (idadeParticipantes > 18){
	console.log("Cadastro permitido!")

}else{
	console.log("Menor que 18 não é permitido!")
}


if (listaParticipants < 100){
	console.log("Deseja cadastrar outro participante?")

}else{
	console.log('Numero de participantes excedido!')
}

