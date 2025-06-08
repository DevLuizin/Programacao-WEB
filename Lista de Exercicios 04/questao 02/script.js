function identificarMaior() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(num1) || isNaN(num2)) {
        window.alert("É obrigatório informar ambos campos com números válidos!!!");
        return;
    }

    let maior

    if (num1 === num2) {
        window.alert("Os números são iguais! Numero: " + num1);
        return; 
    }

    if (num1 > num2) {
        maior = num1;
    } else {
        maior = num2;
    }

    window.alert("O maior número é: " + maior);

}