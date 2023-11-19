var nomePlayer1 = prompt("player 1 qual o nome do seu personagem")
console.log(nomePlayer1)
var poderDeAtaque = prompt("player 1 qual  e o dano do seu personagem")
console.log(poderDeAtaque)

var nomePlayer2 = prompt("player 2 qual o nome do seu personagem")
console.log(nomePlayer2)
var pontosDeVida = prompt("player 2 quantos pontos de vida  o seu personagem tem ")
console.log(pontosDeVida)
var pontosDeDefesa = prompt("player 2 quantos pontos de defesa  o seu personagem tem ")
console.log(pontosDeDefesa)
escudo = prompt(" player 2 o seu personagem tem escudo responda com S ou N ")
var escudo = (escudo === 'S') ? true : false;
var pontosDeVidaRestante 
alert(escudo)


if(poderDeAtaque > pontosDeDefesa && !escudo){
   var caso1 = poderDeAtaque - pontosDeDefesa
   console.log(caso1)
   var pontosDeVidaRestante = pontosDeVida - caso1
    
    alert("O player 2 tomou " + caso1 + " e no momento tem " + pontosDeVida )

}
if(poderDeAtaque > pontosDeDefesa && escudo){
    var caso1 = poderDeAtaque - pontosDeDefesa
    console.log(caso1)
    var pontosDeVidaRestante = pontosDeVida - (caso1 * 0,5)
     
     alert("O player 2 tomou " + caso1 + " e no momento tem " + pontosDeVida )
 
 }
if(poderDeAtaque < pontosDeDefesa ){
    
     
     alert("O player 2 tomou não tomou dano pois sua defesa e muito alta" )
 
 }
