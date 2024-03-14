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
var teclado = require("prompt-sync")();
console.log("Digite 1 para sim e 0 para n\u00E3o");
var resposta1 = parseFloat(teclado("Telefonou para a v\u00EDtima?"));
var resposta2 = parseFloat(teclado("Esteve no local do crime?"));
var resposta3 = parseFloat(teclado("Mora perto da v\u00EDtima?"));
var resposta4 = parseFloat(teclado("Devia para a v\u00EDtima?"));
var resposta5 = parseFloat(teclado("J\u00E1 trabalhou com a v\u00EDtima?"));
var interrogatorio = 0;
if (resposta1 == 1) {
    interrogatorio++;
}
if (resposta2 == 1) {
    interrogatorio++;
}
if (resposta3 == 1) {
    interrogatorio++;
}
if (resposta4 == 1) {
    interrogatorio++;
}
if (resposta5 == 1) {
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Voc\u00EA \u00E9 suspeito!");
}
else if (interrogatorio >= 3 && interrogatorio <= 4) {
    console.log("Voc\u00EA \u00E9 c\u00FAmplice!");
}
else if (interrogatorio == 5) {
    console.log("Voc\u00EA \u00E9 o assassino!");
}
else {
    console.log("Voc\u00EA \u00E9 inocente!");
}
