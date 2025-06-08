let somaTotal = 0;
let qtdTotal = 0;

function adicionarNum() {
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
}

function mostrarSoma() {
    window.alert(`A soma dos números é: ${somaTotal}`);
}

function mostrarMedia() {
    if (qtdTotal === 0) {
        window.alert("Nenhum número foi adicionado.");
        return;
    }
    let media = somaTotal / qtdTotal;
    window.alert(`A média dos números é: ${media.toFixed(2)}`);
}