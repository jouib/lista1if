/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo 
 menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno: Joui Bomfim
*/

const teclado = require (`prompt-sync`)();

let maca1: number = 0.25;
let maca2: number = 0.30;

let compra: number = parseFloat(teclado(`Digite a de maçãs`))

if (compra <= 12){
    console.log(maca1 * compra)
}
else (compra > 12){
console.log(maca2 * compra)
}