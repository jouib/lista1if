var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o raio em metros :"));
var altura = parseFloat(teclado("Digite a altura em metros:"));
var pi = 3.14159;
var volume = pi * raio * raio * altura;
console.log("O valor do volume \u00E9 ".concat(volume));
