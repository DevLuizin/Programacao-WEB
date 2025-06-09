function verificarComprimento() {
    const nome = document.getElementById('nome').value.trim();

    if (nome === '') {
        window.alert('O campo nome não pode estar vazio.');
        return;
    }

    if (nome.includes(' ')) {
        window.alert('É obrigatório o informe, apenas, do primeiro nome.');
        return;
    }

    const qtd = nome.length;
    if (qtd % 2 === 0) {
        alert(`O nome "${nome}" possui ${qtd} caracteres, que é um número par.`);
    } else {
        alert(`O nome "${nome}" possui ${qtd} caracteres, que é um número ímpar.`);
    }
}