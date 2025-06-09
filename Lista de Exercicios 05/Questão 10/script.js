function atualizarDiaHorario() {
    let dt = new Date();

    let dia = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();
    let mes = dt.getMonth() + 1 < 10 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1;
    let ano = dt.getFullYear();
    let hora = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
    let minuto = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
    let segundo = dt.getSeconds() < 10 ? `0${dt.getSeconds()}` : dt.getSeconds();

    let tempo = (hora * 3600) + (minuto * 60) + segundo;

    let tempoRestante = (24 * 3600) - tempo;
    let horasRestantes = Math.floor(tempoRestante / 3600);
    let minutosRestantes = Math.floor((tempoRestante % 3600) / 60);
    let segundosRestantes = tempoRestante % 60;


    document.getElementById('spanDiaHorario').innerHTML = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    document.getElementById('spanTempoRestante').innerHTML = `${horasRestantes}:${minutosRestantes}:${segundosRestantes}`;

}

let botao = document.querySelector('button');

botao.addEventListener('click', atualizarDiaHorario);
window.addEventListener('load', atualizarDiaHorario);