alert("Boa noite Fassa seu pedido")
let numeroDoPedido = ""
let contadorDePedido = 0
do{
numeroDoPedido = prompt("Menu" + "\n 1 Tropeiro " + "\n 2 Calabresa " + "\n 3 Batata-frita "+ "\n 4 macarão "+ "\n 5 Encerrar o programa ")
contadorDePedido++
}while(numeroDoPedido !== "5")

if(contadorDePedido != 0 && contadorDePedido != 1){
    alert("Obrigado por fazer seu pedido ")
}else{
     alert("Esperamos que um dia seja nosso cliente")}
