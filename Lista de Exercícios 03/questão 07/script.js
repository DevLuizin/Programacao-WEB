let n1 = parseFloat(window.prompt("Nota 1 (peso 1):"));
let n2 = parseFloat(window.prompt("Nota 2 (peso 1):"));
let n3 = parseFloat(window.prompt("Nota 3 (peso 2):"));

let media = (n1 + n2 + n3 * 2) / 4;
let situacao = media >= 6 ? "Aprovado" : "Reprovado";

window.alert("Média: " + media + "\nSituação: " + situacao);
