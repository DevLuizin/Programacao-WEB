function calcular() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        window.alert("Por favor, insira números válidos nos dois campos!");
        return;
    }

    let operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            if (valor2 === 0) {
                window.alert("Divisão por zero não é permitida!");
                return;
            }
            resultado = valor1 / valor2;
            break;
    }

    document.getElementById("resultado").value = resultado.toString();
}