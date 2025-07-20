const express = require('express');
const app = express();

function getNumeroRandomico(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/numeros-aleatorios', (req, res) => {
    const quantidade = parseInt(req.query.qtd, 10) || 10;

    let responseBody = '';

    for (let i = 0; i < quantidade; i++) {
        const numero = getNumeroRandomico(1, 100);
        responseBody += numero + '\n';
    }

    res.type('text/plain').send(responseBody.trim());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor da Questão 2 rodando em http://localhost:{PORT}`);
    console.log(`Acesse, por exemplo: http://localhost:${PORT}/numeros-aleatorios?qtd=5`);
});