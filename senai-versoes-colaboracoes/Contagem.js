'use strict'

var readlineSync = require("readline-sync")
var options 
var quantiaDeAlunos = 20, alunos

do{
    console.log()
    console.log(" #Sistema de Contagem e Classificação#")
    console.log(" 1: Controle de Alunos")
    console.log(" 0: Sair do sistema\n")

    options = readlineSync.question("Digite um numero: ")

    switch(options){
        case "1"://Contagem de alunos
        console.log(" Contagem de Alunos e Classificação")

        for (let indice = 0; indice <= quantiaDeAlunos; indice++){
            if (indice === 0){
                console.log("A quantidade de alunos é zero" )
            }else if(indice % 2 === 0){
                console.log("O numero de alunos é par: " + indice)
            }else{
                console.log("O numero de alunos é impar: " + indice)
            }
        }
            break
             
    }


}while(options != 0)