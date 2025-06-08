let valor1 = parseFloat(window.prompt("Digite o primeiro valor:"));
let operador = window.prompt("Digite o operador (+, -, *, /):");
let valor2 = parseFloat(window.prompt("Digite o segundo valor:"));

let resultado;
switch (operador) {
    case '+':
        resultado = val1 + val2;
        break;
    case '-':
        resultado = val1 - val2;
        break;
    case '*':
        resultado = val1 * val2;
        break;
    case '/':
        if (val2 !== 0) {
        resultado = val1 / val2;
        } else {
        resultado = "Divisão por zero é indefinida";
        }
        break;
    default:
        resultado = "Operador inválido";
}

window.alert(valor1 + " " + operador + " " + valor2 + " = " + resultado);
