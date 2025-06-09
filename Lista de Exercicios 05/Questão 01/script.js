function verificarPalindromo() {
    const textoOriginal = document.getElementById('texto').value;
    if (!textoOriginal) {
        alert('Por favor, insira um texto para verificar.');
        return;
    }

    
    // Normaliza o texto: remove acentos, espaços e pontuações, e converte para minúsculas.
    const textoTratado = textoOriginal
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    // Inverte o texto tratado
    const textoInvertido = textoTratado.split('').reverse().join('');

    // Compara o texto tratado com sua versão invertida e exibe o resultado. 
    if (textoTratado === textoInvertido) {
        window.alert("O texto informado representa um palíndromo!"); // 
    } else {
        window.alert("O texto informado NÃO representa um palíndromo.");
    }
}