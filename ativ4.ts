/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Joui Bomfim
*/

const teclado = require (`prompt-sync`)();

let nUm: number = teclado(`Digite o primeiro número inteiro:`);
let nDois: number = teclado(`Digite o segundo número inteiro:`);
let nTres: number = teclado(`Digite o terceiro número inteiro:`);

let maior: number= 0;
let mediano: number= 0;
let menor: number= 0;

if (nUm>nDois && nUm>nTres){
    maior = nUm;

    if (nDois>nTres){
        mediano = nDois;
        menor = nTres;
    }
    else{
        mediano = nTres;
        menor = nDois;
    }

}
else if(nDois>nUm && nDois>nTres){
    maior = nDois;
    
    if (nUm>nTres){
        mediano = nUm;
        menor = nTres;
    }
    else{
        mediano = nTres;
        menor = nUm;
    }
}
else if (nTres>nUm && nTres>nDois){
    maior = nTres;
    if (nUm>nDois){
        mediano = nUm;
        menor = nDois;
    }
    else{
        console.log(`Algo deu errado`)
    }
}
console.log(`A ordem crescente dos múmeros é ${menor}, ${mediano} e ${maior}.`)