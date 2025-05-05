let real = parseFloat(window.prompt("Digite um número real:"));
let resultado = real >= 0 ? Math.abs(real - Math.pow(real, 3)) : Math.pow(real, 2);
window.alert("Resultado: " + resultado);
