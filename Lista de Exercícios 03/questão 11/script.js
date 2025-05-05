let numero = parseInt(window.prompt("Digite um número positivo:"));
let divisores = "";

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores += i + "\n";
  }
}

window.alert("Divisores de " + numero + ":\n" + divisores);
