let soma = 0;
for (let i = 0; i < 10; i++) {
  let num = parseInt(window.prompt("Digite o número " + (i + 1) + ":"));
  soma += num;
}
let media = soma / 10;
window.alert("Média: " + media);
