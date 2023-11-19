nomeCarro1 = prompt("player 1 qual o nome do seu carro")
velocidadeCarro1 = prompt("player 1 qual e a velociade atual do seu carro")

nomeCarro2 = prompt("player 2 qual o nome do seu carro")
velocidadeCarro2 = prompt("player 2 qual e a velociade atual do seu carro")


if(velocidadeCarro1 > velocidadeCarro2){
    subVelocidade =  velocidadeCarro1 - velocidadeCarro2 
    
    alert(" O carro " + nomeCarro1 + " esta mais rapido que " + nomeCarro2 + " por " + subVelocidade)

}
if(velocidadeCarro2 > velocidadeCarro1){
    subVelocidade =  velocidadeCarro2 - velocidadeCarro1 
    alert(" O carro " + nomeCarro2 + " esta mais rapido que " + nomeCarro1 + " por " + subVelocidade)
}