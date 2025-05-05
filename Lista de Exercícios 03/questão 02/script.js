let n1 = parseFloat(window.prompt("Digite o primeiro número:"));
let n2 = parseFloat(window.prompt("Digite o segundo número:"));

let soma = n1 + n2;
let produto = n1 * Math.pow(n2, 2);
let quadradoN1 = Math.pow(n1, 2);
let modulo = n1 % n2;

window.alert(
  "Soma: " + soma +
  "\nProduto do 1º pelo quadrado do 2º: " + produto +
  "\nQuadrado do 1º número: " + quadradoN1 +
  "\nMódulo da divisão: " + modulo
);
