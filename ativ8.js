/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Joui Bomfim
*/
var teclado = require("prompt-sync")();
var anguloUm = parseFloat(teclado("Digite o primeiro \u00E2ngulo:"));
var anguloDois = parseFloat(teclado("Digite o segundo \u00E2ngulo:"));
var anguloTres = parseFloat(teclado("Digite o terceiro \u00E2ngulo:"));
if (anguloUm = 90 || anguloDois)
     = 90 || anguloTres;
90;
{
    console.log("\u00C9 um tri\u00E2ngulo ret\u00E2ngulo");
}
if (anguloUm > 90 || anguloDois > 90 || anguloTres > 90) {
    console.log("\u00C9 um tri\u00E2ngulo Obtus\u00E2ngulo");
}
else if (anguloUm < 90 && anguloDois < 90 && anguloTres < 90) {
    console.log("\u00C9 um tri\u00E2ngulo acut\u00E2ngulo");
}
