function calcularIMC(peso, altura) {
    return new Promise((resolve, reject) => {
      if (typeof peso !== 'number' || typeof altura !== 'number') {
        reject(new Error('Os parâmetros devem ser do tipo "number"'));
        return;
      }
  
      const imc = peso / (altura * altura);
      resolve(imc);
    });
  }
  
  function exibirResultadoIMC(peso, altura) {
    calcularIMC(peso, altura)
      .then((imc) => {
        console.log('IMC calculado:', imc);
  
        if (imc < 18.5) {
          console.log('**************magreza**************');
        } else if (imc >= 18.5 && imc <= 24.9) {
          console.log('************normal************');
        } else if (imc >= 25 && imc <= 29.9) {
          console.log('******************sobrepeso******************');
        } else if (imc >= 30 && imc <= 39.9) {
          console.log('******************obesidade******************');
        } else {
          console.log('******************************obesidade grave******************************');
        }
  
        // Mensagem para evidenciar o funcionamento assíncrono
        console.log('Operação assíncrona concluída.');
      })
      .catch((error) => {
        console.error('Erro:', error.message);
      });
  }
  
  // Exemplo de uso
  exibirResultadoIMC(70, 1.75);
  exibirResultadoIMC('peso', 1.75); 