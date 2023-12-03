const media = (...valores) => {
    const soma = valores.reduce((acc, valor) => acc + valor, 0);
    return soma / valores.length;
};
  
  // Teste
console.log(media(2, 6, 3, 7, 4)); // Saída esperada: 4.4

const mediaPonderada = (...valores) => {
    const total = valores.reduce((acc, { n, p }) => acc + n * p, 0);
    const pesoTotal = valores.reduce((acc, { p }) => acc + p, 0);
    return total / pesoTotal;
};
  
  // Teste
console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })); 

const mediana = (...valores) => {
    const sortedValores = valores.sort((a, b) => a - b);
    const meio = Math.floor(sortedValores.length / 2);
  
    if (sortedValores.length % 2 === 0) {
      return media(sortedValores[meio - 1], sortedValores[meio]);
    } else {
      return sortedValores[meio];
    }
};
  

console.log(mediana(2, 4, 5, 7, 42, 99)); // Saída esperada: 6
console.log(mediana(15, 14, 8, 7, 3)); // Saída esperada: 8

const moda = (...valores) => {
    const contagem = {};
  
    valores.forEach(valor => {
      contagem[valor] = (contagem[valor] || 0) + 1;
    });
  
    let moda;
    let maxContagem = 0;
  
    for (const valor in contagem) {
      if (contagem[valor] > maxContagem) {
        moda = valor;
        maxContagem = contagem[valor];
      }
    }
  
    return parseInt(moda); // Retorna como número, pois as chaves de objetos são strings
};
 
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));

