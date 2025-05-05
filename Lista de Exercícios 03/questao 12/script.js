let numero = parseInt(window.prompt("Digite um número inteiro:"));
let soma = 0;

for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    soma += i;
  }
}

window.alert("Soma dos divisores de " + numero + " (exceto ele próprio): " + soma);
