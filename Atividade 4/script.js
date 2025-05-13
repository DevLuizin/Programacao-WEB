function converter() {
    const metros = parseFloat(document.getElementById("metros").value);
    const unidade = document.getElementById("unidade").value;

    if (isNaN(metros) || metros < 0) {
        alert("Distância inválida!");
        return;
    }
    
    let resultado;

    switch (unidade) {
        case "polegada":
            resultado = metros / 0.0254;
            break;
        case "jarda":
            resultado = metros / 0.9144;
            break;
        case "milha":
            resultado = metros / 1609.344;
            break;
        case "legua":
            resultado = metros / 4828.032;
            break;
    }

    alert(`${metros} metros equivalem a ${resultado.toFixed(2)} ${unidade}${resultado !== 1 ? 's' : ''}.`);
}

let botao = document.querySelector("button");

botao.addEventListener("click", converter);