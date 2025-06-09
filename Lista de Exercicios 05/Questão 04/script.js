function contarVogais() {
    const texto = document.getElementById('textoVogais').value;

    if (texto === '') {
        alert('O campo de texto não pode estar vazio.');
        return;
    }

    const vogaisEncontradas = texto.match(/[aeiouáéíóúàâêôãõ]/gi);

    const qtd = vogaisEncontradas ? vogaisEncontradas.length : 0;

    window.alert(`Quantidade de vogais: ${qtd}`);
}