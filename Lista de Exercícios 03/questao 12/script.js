let numero = parseInt(window.prompt("Digite um número inteiro:"));
let soma = 0;
let divisores = [];
for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    soma += i;
    divisores.push(i);
  }
}

window.alert("Soma dos divisores de " + numero + " é (exceto ele próprio): " + divisores + " = " + soma);
