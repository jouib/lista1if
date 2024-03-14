/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Joui Bomfim
*/
var teclado = require("prompt-sync")();
var nUm = teclado("Digite o primeiro n\u00FAmero inteiro:");
var nDois = teclado("Digite o segundo n\u00FAmero inteiro:");
var nTres = teclado("Digite o terceiro n\u00FAmero inteiro:");
var maior = 0;
var mediano = 0;
var menor = 0;
if (nUm > nDois && nUm > nTres) {
    maior = nUm;
    if (nDois > nTres) {
        mediano = nDois;
        menor = nTres;
    }
    else {
        mediano = nTres;
        menor = nDois;
    }
}
else if (nDois > nUm && nDois > nTres) {
    maior = nDois;
    if (nUm > nTres) {
        mediano = nUm;
        menor = nTres;
    }
    else {
        mediano = nTres;
        menor = nUm;
    }
}
else if (nTres > nUm && nTres > nDois) {
    maior = nTres;
    if (nUm > nDois) {
        mediano = nUm;
        menor = nDois;
    }
    else {
        console.log("Algo deu errado");
    }
}
console.log("A ordem crescente dos m\u00FAmeros \u00E9 ".concat(menor, ", ").concat(mediano, " e ").concat(maior, "."));
