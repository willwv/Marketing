'use strict';
const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 1337;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

var promocoes = [
    { id: "1", nome: "Natal", desconto: "10%" },
    { id: "2", nome: "Pascoa", desconto: "15%" },
    { id: "3", nome: "Carnaval", desconto: "10%" },
];

router.get('/', (req, res, next) => {
    res.status(200).send(promocoes);
});

router.get('/:id', (req, res, next) => {
    let i;
    for (i = 0; i < promocoes.length; i++) {
        if (promocoes[i].id === req.params.id)
            res.status(200).send(promocoes[i]);
    }
    res.status(200).send({Sucesso: false, Mensagem: "Promocao nao encontrada."});
});


app.use('/', router);
server.listen(port);
