const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simulação de um banco de dados local com um arquivo JSON
const dados = [
    { id: 1, nome: 'Item 1', valor: 10 },
    { id: 2, nome: 'Item 2', valor: 20 },
];

app.get('/api/dados', (req, res) => {
    res.json(dados);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
