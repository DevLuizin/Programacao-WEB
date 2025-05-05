let valor1 = parseFloat(window.prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(window.prompt("Digite o segundo valor:"));
let operador = window.prompt("Digite o operador (+, -, *, /):");

let resultado;
if (operador === "+") resultado = valor1 + valor2;
else if (operador === "-") resultado = valor1 - valor2;
else if (operador === "*") resultado = valor1 * valor2;
else if (operador === "/") resultado = valor1 / valor2;
else resultado = "Operador inválido";

window.alert(valor1 + " " + operador + " " + valor2 + " = " + resultado);
