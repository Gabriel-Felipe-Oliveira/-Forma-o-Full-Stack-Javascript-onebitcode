alert("Esse site é um conversor de medidas");

const tamanho = parseFloat(prompt("Me diga suas medidas em metros"));
const tipoDaMedida = prompt("Escolha para qual quer converter:\nMilímetro (mm)\nCentímetro (cm)\nDecímetro (dm)\nDecâmetro (dam)\nHectômetro (hm)\nQuilômetro (km)");

alert("Tamanho: " + tamanho + " metros");
alert("Tipo de medida: " + tipoDaMedida);

switch (tipoDaMedida) {
    case "mm":
        tamanho *= 1000;
        alert("O resultado é " + tamanho + " milímetros");
        break;

    case "cm":
        tamanho *= 100;
        alert("O resultado é " + tamanho + " centímetros");
        break;

    case "dm":
        tamanho *= 10;
        alert("O resultado é " + tamanho + " decímetros");
        break;

    case "dam":
        tamanho *= 0.1;
        alert("O resultado é " + tamanho + " decâmetros");
        break;

    case "hm":
        tamanho *= 0.01;
        alert("O resultado é " + tamanho + " hectômetros");
        break;

    case "km":
        tamanho *= 0.001;
        alert("O resultado é " + tamanho + " quilômetros");
        break;

    default:
        alert("Você não escolheu um tipo válido");
}