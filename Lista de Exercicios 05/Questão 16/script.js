function visualizarEntradaManual() {
    let isEntradaManual = document.getElementById("cor").value == "manual";

    document.getElementById("divCorManual").style.display = isEntradaManual ? 'flex' : 'none';

    if (isEntradaManual) 
        document.getElementById('codigoCor').focus();
}

function alterarCor() {
    let cor = document.getElementById("cor").value;

    let codigoCor = document.getElementById("codigoCor").value.trim();

    if (cor === "manual" && codigoCor == "") {
        alert("Cor primária não informada ou em formato RGB não informada!");
    } else {
        codigoCor = cor != 'manual' ? cor : codigoCor;

        let elementos = document.querySelectorAll("h1, p");

        for (let i = 0; i < elementos.length; i++) {
            elementos[i].style.color = codigoCor;
        }
    }
}

document.querySelector("select").addEventListener("change", visualizarEntradaManual);
document.querySelector("button").addEventListener("click", alterarCor);
