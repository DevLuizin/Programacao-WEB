// Obtendo as notas do usuário 
let n1 = parseFloat(window.prompt("Nota 1 (peso 1):"));
let n2 = parseFloat(window.prompt("Nota 2 (peso 1):"));
let n3 = parseFloat(window.prompt("Nota 3 (peso 2):"));

// Definindo os pesos
let peso1 = 1;
let peso2 = 1;
let peso3 = 2;

// Calculando a média ponderada
let media = (n1 * peso1 + n2 * peso2 + n3 * peso3) / (peso1 + peso2 + peso3);
let situacao = media >= 6 ? "Aprovado" : "Reprovado";

window.alert("Média: " + media + "\nSituação: " + situacao);
