function converterTexto() {
    const textoOriginal = document.getElementById('textoOriginal').value;

    document.getElementById('textoMaiusculo').value = textoOriginal.toUpperCase();
    document.getElementById('textoMinusculo').value = textoOriginal.toLowerCase();
}