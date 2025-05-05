let multiplos = "";
let count = 0;
let numero = 1;

while (count < 5) {
  if (numero % 3 === 0) {
    multiplos += numero + "\n";
    count++;
  }
  numero++;
}

window.alert("5 primeiros múltiplos de 3:\n" + multiplos);
