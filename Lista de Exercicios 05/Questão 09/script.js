function atualizarDiaHorario() {
    let dt = new Date();

    let dia = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();
    let mes = dt.getMonth() + 1 < 10 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1;
    let ano = dt.getFullYear();
    let hora = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
    let minuto = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
    let segundo = dt.getSeconds() < 10 ? `0${dt.getSeconds()}` : dt.getSeconds();

    document.getElementById('spanDiaHorario').innerHTML = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

let botao = document.querySelector('button');

botao.addEventListener('click', atualizarDiaHorario);