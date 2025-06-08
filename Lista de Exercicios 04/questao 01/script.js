function verificarMultiplos() {
    let numeroStr = window.prompt("Informe um número inteiro: ")
    let numero = parseInt(numeroStr);

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        window.alert("O número " + numero + " é múltiplo de 3 e 5.");
    } else {
        window.alert("O número " + numero + " NÃO é múltiplo de 3 e 5.");
    }
}