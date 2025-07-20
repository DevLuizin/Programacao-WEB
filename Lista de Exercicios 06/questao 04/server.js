const express = require('express');
const app = express();

app.use(express.static(__dirname));

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 0;
    if (n === 2) return 1;

    let a = 0, b = 1, temp;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

app.get('/fibonacci', (req, res) => {
    const n = parseInt(req.query.posicao, 10);

    if (isNaN(n) || n < 1)
        return res.status(400).send('Por favor, forneça um número inteiro positivo para a posição');

    const resultado = fibonacci(n);
    res.type('text/plain').send(resultado.toString());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor da Questão 04 rodando em: http://localhost:${PORT}`);
    console.log(`Acesse o formulário em: http://localhost:${PORT}/index.html`);
})