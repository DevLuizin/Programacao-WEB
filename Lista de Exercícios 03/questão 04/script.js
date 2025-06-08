let x = parseFloat(window.prompt("Digite o primeiro número:"));
let y = parseFloat(window.prompt("Digite o segundo número:"));
let diferenca = Math.abs(x - y);
if (diferenca < 0) {
    diferenca = diferenca * -1;
}
window.alert("Diferença entre eles: " + diferenca);
