/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder 
positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como 
"Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: Joui Bomfim
*/

const teclado = require (`prompt-sync`)();

console.log(`Digite 1 para sim e 0 para não`)

let resposta1: number = parseFloat(teclado(`Telefonou para a vítima?`));
let resposta2: number = parseFloat(teclado(`Esteve no local do crime?`));
let resposta3: number = parseFloat(teclado(`Mora perto da vítima?`));
let resposta4: number = parseFloat(teclado(`Devia para a vítima?`));
let resposta5: number = parseFloat(teclado(`Já trabalhou com a vítima?`));

let interrogatorio: number = 0;

if(resposta1 == 1){
    interrogatorio++;
}
if(resposta2 == 1){
    interrogatorio++;
}
if(resposta3 == 1){
    interrogatorio++;
}
if(resposta4 == 1){
    interrogatorio++;
}
if(resposta5 == 1){
    interrogatorio++;
}
if(interrogatorio == 2){
    console.log(`Você é suspeito!`);
}
else if(interrogatorio >=3 && interrogatorio <= 4) {
    console.log(`Você é cúmplice!`);
}
else if(interrogatorio == 5) {
    console.log(`Você é o assassino!`);
}
else {
    console.log(`Você é inocente!`);
}
