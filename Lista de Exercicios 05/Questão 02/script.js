let senhaNumerica = '';
const campoSenha = document.getElementById('campoSenha');

function inserir(digito) {
    senhaNumerica += digito;
    campoSenha.value += '*';
}

function apagarSenha() {
    senhaNumerica = '';
    campoSenha.value = '';
}

function mostrarSenha() {
    if (senhaNumerica === '') {
        window.alert('Nenhuma senha foi digitada.');
        return;
    }

    const digitosPorExtenso = {
        '0': 'ZERO',
        '1': 'UM',
        '2': 'DOIS',
        '3': 'TRÊS',
        '4': 'QUATRO',
        '5': 'CINCO',
        '6': 'SEIS',
        '7': 'SETE',
        '8': 'OITO',
        '9': 'NOVE'
    };

    const senhaPorExtenso = senhaNumerica.split('').map(digito => digitosPorExtenso[digito]).join(', ');

    window.alert(`Senha por extenso: ${senhaPorExtenso}`);
}