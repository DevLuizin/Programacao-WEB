let numeroSecreto;
let palpitesIncorretos = [];

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 1000) + 1;
  palpitesIncorretos = [];
  // sem acento no id
  document.getElementById("historico").innerHTML = "";
  document.getElementById("palpiteInput").value = "";
}

function verificarPalpite() {
  const palpiteInput = document.getElementById("palpiteInput");
  const palpite = parseInt(palpiteInput.value, 10);

  if (isNaN(palpite) || palpite < 1 || palpite > 1000) {
    alert("Por favor, insira um número válido entre 1 e 1000.");
    return;
  }

  if (palpite === numeroSecreto) {
    palpitesIncorretos.sort((a, b) => b - a);
    const historicoFinal =
      "Parabéns! Você acertou o número secreto!\n\nHistórico de palpites incorretos (ordem decrescente):\n" +
      palpitesIncorretos.join(", ");
    alert(historicoFinal);
    iniciarJogo();
  } else {
    palpitesIncorretos.push(palpite);
    const dica = palpite < numeroSecreto ? "inferior" : "superior";
    const msg = `<p>${palpite} é um palpite incorreto (${dica} ao número sorteado).</p>`;
    document.getElementById("historico").innerHTML += msg;
    palpiteInput.value = "";
    palpiteInput.focus();
  }
}
