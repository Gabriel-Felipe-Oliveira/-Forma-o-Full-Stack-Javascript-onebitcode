function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

function calcularAreaQuadrado(lado) {
  return lado * lado;
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo(raio) {
  const pi = 3.14;
  return pi * Math.pow(raio, 2);
}

function exibirMenu() {
   return prompt("Escolha uma opção:"+
    " \n1. Área do Triângulo"+
    "\n2. Área do Retângulo"+
    "\n3. Área do Quadrado"+
    "\n4. Área do Trapézio"+
    "\n5. Área do Círculo"+
    "\n6. Sair");

}

function main() {
  let opcao;

  do {
      
      opcao = parseInt(exibirMenu());

      switch (opcao) {
          case 1:
              let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
              let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
              alert("Área do Triângulo:" + calcularAreaTriangulo(baseTriangulo, alturaTriangulo));
              break;

          case 2:
              let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
              let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
              alert("Área do Retângulo:"+ calcularAreaRetangulo(baseRetangulo, alturaRetangulo));
              break;

          case 3:
              let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado:"));
              alert("Área do Quadrado:"+ calcularAreaQuadrado(ladoQuadrado));
              break;

          case 4:
              let baseMaiorTrapezio = parseFloat(prompt("Digite a base maior do trapézio:"));
              let baseMenorTrapezio = parseFloat(prompt("Digite a base menor do trapézio:"));
              let alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio:"));
              alert("Área do Trapézio:"+ calcularAreaTrapezio(baseMaiorTrapezio, baseMenorTrapezio, alturaTrapezio));
              break;

          case 5:
              let raioCirculo = parseFloat(prompt("Digite o raio do círculo:"));
              alert("Área do Círculo:"+ calcularAreaCirculo(raioCirculo));
              break;

          case 6:
              alert("Saindo do programa. Até mais!");
              break;

          default:
              alert("Opção inválida. Tente novamente.");
      }
  } while (opcao !== 6);
}

// Chamada da função principal
main();

