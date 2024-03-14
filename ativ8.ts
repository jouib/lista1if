/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, 
Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Joui Bomfim
*/

const teclado = require (`prompt-sync`)();

let angulo1: number = parseFloat(teclado(`Digite o primeiro ângulo:`));
let angulo2: number = parseFloat(teclado(`Digite o segundo ângulo:`));
let angulo3: number = parseFloat(teclado(`Digite o terceiro ângulo:`));

if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
    console.log(`É um triângulo retângulo`);
}
else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
    console.log(`É um triângulo Obtusângulo`);
}
else if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
    console.log(`É um triângulo acutângulo`);
}