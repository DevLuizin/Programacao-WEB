function loadOpcoesPares() {
    let camposSelecao = document.getElementsByTagName('select');

    for (let i = 0; i < camposSelecao.length; i++) {
        let campo = camposSelecao[i];

        let opcaoDefault = document.createElement('option');
        opcaoDefault.setAttribute('value', -1);
        opcaoDefault.append(document.createTextNode(''));

        campo.appendChild(opcaoDefault);

        for (let j = 33; j <= 42; j++) {
            let opcaoTam = document.createElement('option');
            opcaoTam.setAttribute('value', j);
            opcaoTam.append(document.createTextNode(j));

            campo.appendChild(opcaoTam);
        }
    }
}

function identificarParesCompletos() {
    let divParesCompletos = document.getElementById('paresCompletos');

    while (divParesCompletos.firstChild) {
        divParesCompletos.removeChild(divParesCompletos.firstChild);
    }

    let qtdEsq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let qtdDir = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 1; i <= 5; i++) {
        let peEsq = document.getElementById(`peEsq${i}`).value;
        let peDir = document.getElementById(`peDir${i}`).value;

        if (peEsq == -1) {
            alert("Há um ou mais campos não preenchidos.");
            break;
        }

        if (peDir == -1) {
            alert("Há um ou mais campos não preenchidos.");
            break;
        }

        qtdEsq[parseInt(peEsq) - 33]++;
        qtdDir[parseInt(peDir) - 33]++;

    }

    for (let i = 0; i < 10; i++) {
        if (qtdEsq[i] > 0 && qtdDir[i] > 0) {
            let qtdPares = qtdEsq[i] < qtdDir[i] ? qtdEsq[i] : qtdDir[i];

            for (let j = 0; j < qtdPares; j++) {
                let imgPar = document.createElement('img');
                imgPar.setAttribute('src', `imagens/par-${i + 33}.png`);

                divParesCompletos.appendChild(imgPar);
            }
        }
    }
}

let botao = document.querySelector('button');

botao.addEventListener('click', identificarParesCompletos);

window.addEventListener('load', loadOpcoesPares);