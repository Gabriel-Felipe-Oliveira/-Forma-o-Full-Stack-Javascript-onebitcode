let valorInicial = prompt("qual seria a contidade inicial de dinheiro")
let valor = parseInt(valorInicial)

do{
ordem = prompt("Oque desejar vazer com esse dinheiro" +"R$"+valor + "\n 1 Somar " + "\n 2 Subtrair " + "\n 3 Encerrar o Programa" )

//  caso ele deseje somar
if(ordem == "1"){

let somar = parseInt(prompt("Digite o valor que quer somar "))
alert("valor atual e = R$" + (valor += somar))
}

// caso ele deseje subtrair
if(ordem == "2"){

let subtrair = parseInt(prompt("Digite o valor que quer subtrair "))
alert("valor atual e = R$" + (valor -= subtrair))
}

}while(ordem !== "3")


