let metros = parseFloat(prompt("Digite a distância em metros:"));

if (metros =! null) {
  if (isNaN(metros)) {
    alert("Por favor, insira um número válido.");
  } else {
    let decimetros = metros * 10;
    let centimetros = metros * 100;
    let milimetros = metros * 1000;

    alert(`A distância de ${metros} metros é equivalente a:\n` +
          `${decimetros} decímetros,\n ` +
          `${centimetros} centímetros e \n` +
          `${milimetros} milímetros.`
    );
  }
}