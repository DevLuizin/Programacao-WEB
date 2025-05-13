let numero = parseInt(window.prompt("Digite um número inteiro:"));
let soma = 0;
let divisores = [];
let contador = 0; 

for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    soma += i;
    divisores.push(i);
    contador++; 
  }
}

if (contador > 0) {
    let media = soma / contador;
    let divisorMedio = divisores.reduce((maisProximo, atual) => {
        return Math.abs(atual - media) < Math.abs(maisProximo - media) ? atual : maisProximo;
    });
    window.alert(
        "Soma dos divisores de " + numero + " (exceto ele próprio): " + soma +
        "\nMédia dos divisores: " + media.toFixed(2) +
        "\nDivisor médio: " + divisorMedio
    );
}   
