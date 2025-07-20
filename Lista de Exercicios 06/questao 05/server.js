const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/info-instante-atual', (req, res) => {
    const parametro = req.query.param;
    const agora = new Date();
    let resposta = 'Instante Atual: ';

    const dia = agora.getDate().toString().padStart(2 , '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
    const ano = agora.getFullYear();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const segundo = agora.getSeconds().toString().padStart(2, '0');
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const diaSemana = diasDaSemana[agora.getDay()];

    switch (parametro) {
        case 'dma':
            resposta += `${dia}/${mes}/${ano}`;
            break;
        case 'ds':
            resposta += diaSemana;
            break;
        case 'dmahms':
            resposta += `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
            break;
        case 'hms':
            resposta += `${hora}:${minuto}:${segundo}`;
            break;
        default:
            resposta = 'Parâmetro inválido. Use dma, ds, dmahms ou hms.'
    }

    res.send(resposta);
});

app.listen(PORT, () => {
    console.log(`Servidor da Questão 05 rodando em: http://localhost:${PORT}`);
});