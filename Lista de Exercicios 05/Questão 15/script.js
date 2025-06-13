function calcularPesoIdeal() {
    let sexo = document.getElementById('sexo').value;
    let alt = document.getElementById('altura').value.trim();

    if (sexo == -1) {
        alert('Sexo não selecionado!');
    } else if (alt == '' || isNaN(alt))
        alert('Altura não informada ou inválida!');
    else {
        let peso = sexo == 0 ? 72.7 * parseFloat(alt) - 58 : 62.1 * parseFloat(alt) - 44.7;
        alert(`Peso Ideal: ${peso.toFixed(2)} kg`);

        let linha = document.createElement('tr');

        let celula = document.createElement('td');

        celula.appendChild(document.createTextNode(sexo == 0 ? 'Masculino' : 'Feminino'));
        linha.appendChild(celula);

        celula = document.createElement('td');
        celula.appendChild(document.createTextNode(parseFloat(alt).toFixed(2)));
        linha.appendChild(celula);

        celula = document.createElement('td');
        celula.appendChild(document.createTextNode(peso.toFixed(2)));
        linha.appendChild(celula);

        document.getElementById('tabHistorico').appendChild(linha);

        document.getElementById('tabHistorico').parentNode.style.display = 'flex';

        document.getElementById("btnLimpar").parentNode.style.display = "flex";
    }
}

function limparHistorico() {
    let tabHistorico = document.getElementById("tabHistorico");

    let linhas = tabHistorico.children;

    while (linhas.length > 2) {
        let index = linhas[linhas.length - 1];  
        tabHistorico.removeChild(index);        
    }

}

document.getElementById("btnCalcular").addEventListener("click", calcularPesoIdeal);
document.getElementById("btnLimpar").addEventListener("click", limparHistorico);