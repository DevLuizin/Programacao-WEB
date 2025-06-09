function exibirMensagem() {
    let dt = new Date();

    let hora = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
    let minuto = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();

    document.getElementById("spanMensagem").innerHTML = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
    document.getElementById("spanHorario").innerHTML = `${hora}:${minuto}`;
}

window.addEventListener("load", exibirMensagem);