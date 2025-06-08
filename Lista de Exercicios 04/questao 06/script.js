let somaTotal = 0;
let qtdTotal = 0;

function adicionarEAtualizar() {
    let numeroStr = window.prompt("Digite um número válido:");

    if (numeroStr === null || numeroStr.trim() === "" || isNaN(numeroStr) || numeroStr.includes(",") || numeroStr.includes(".")) {
        window.alert("É obrigatório o preenchimento correto do campo com um número válido.");
        return;
    }

    let numero = parseFloat(numeroStr);

    somaTotal += numero;
    qtdTotal++;

    let campoLista = document.getElementById("listaNumeros");
    campoLista.value += (campoLista.value === "" ? "" : ", ") + numero;

    document.getElementById('soma').value = somaTotal;
    document.getElementById('media').value = (qtdTotal === 0) ? 0 : (somaTotal / qtdTotal).toFixed(2);
}
