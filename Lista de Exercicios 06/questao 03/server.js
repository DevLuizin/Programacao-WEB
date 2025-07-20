const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/tempo-restante', (req, res) => {
    const agora = new Date();

    const fimDoDia = new Date();
    fimDoDia.setHours(23,59,59,999);

    const diffMs = fimDoDia.getTime() - agora.getTime();
    const totalSegundos = Math.round(diffMs / 1000);

    const formato = req.query.formato;
    let resposta = '';

    if (formato === 's') {
        resposta = `Tempo Restante: ${totalSegundos} segundo(s)`;
    } else {
        const horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;
        resposta = `Tempo Restante: ${horas}h ${minutos}min ${segundos}seg`;
    }

    res.send(resposta);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor da Questão 03 rodando em http://localhost:${PORT}`);
    console.log(`Acesse o formulário em http://localhost:${PORT}/index.html`);
})