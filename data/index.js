const perguntas = require('./perguntas.json');
const respostas = require('./respostas.json');
const testes = require('./testes.json')


module.exports = () => ({
  perguntas: perguntas,
  respostas: respostas,
  testes: testes,
});