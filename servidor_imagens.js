const express = require('express');
const app = express();
const port = 3000;

const imagens = [
    'https://example.com/imagem1.jpg',
    'https://example.com/imagem2.jpg',
    'https://example.com/imagem3.jpg'
];

let indiceAtual = 0;

app.get('/imagens', (req, res) => {
    const imagem = imagens[indiceAtual];
    indiceAtual = (indiceAtual + 1) % imagens.length;
    res.json({ url: imagem });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors());

// const imagens = [
//   'garfield1.jpg',
//   'garfield2.png',
//   'garfield3.gif',
//   'garfield4.jpg',
//   'garfield8.png'
// ];

// let indiceAtual = 0;

// // Endpoint que retorna o próximo caminho da imagem
// app.get('/imagens', (req, res) => {
//   const imagemAtual = imagens[indiceAtual];
//   indiceAtual = (indiceAtual + 1) % imagens.length;
//   res.json({ url: imagemAtual });
// });

// // Endpoint que retorna a primeira imagem do tipo PNG
// app.get('/imagens/png', (req, res) => {
//   const imagemPng = imagens.find((img) => img.endsWith('.png'));
//   res.json({ url: imagemPng });
// });

// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });
