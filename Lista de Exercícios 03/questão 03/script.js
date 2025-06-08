let a = parseFloat(window.prompt("Digite o primeiro número:"));
let b = parseFloat(window.prompt("Digite o segundo número:"));
let maior;
if (a == b) {
    window.alert("Os números são iguais.");
} else if (a > b) {
    maior = a;
} else {
    maior = b;
}
window.alert("Maior número: " + maior);
