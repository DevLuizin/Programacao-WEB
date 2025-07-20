const http = require('http');

function getNumeroRandomico(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});

    let responseBody = '';

    for (let i = 0; i < 10; i++) {
        const numero = getNumeroRandomico(1, 100);

        responseBody += numero + '\n';
    }

    res.end(responseBody.trim());
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor da Questão 1 rodando em http://localhost:${PORT}`);
})