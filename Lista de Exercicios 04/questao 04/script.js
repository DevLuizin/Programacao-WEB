function ehPrimo(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function testarPrimo() {
    let numeroStr = document.getElementById("numero").value;

    if (numeroStr === "" || isNaN(numeroStr) || numeroStr.includes(",") || numeroStr.includes(".")) {
        window.alert("É obrigatório o preenchimento correto do campo com um número inteiro.");
        return;
    }

    let numero = parseInt(numeroStr, 10);

    if (ehPrimo(numero)) {
        window.alert("O número " + numero + " é primo.");
    } else {
        window.alert("O número " + numero + " não é primo.");
    }
}