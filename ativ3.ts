/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: Joui Bomfim
*/

const teclado = require (`prompt-sync`)();

let letra: string = teclado(`Digite uma letra:`);

if (letra == `A` || letra ==`I` || letra == `U` || letra == `E` || letra ==`O` ||letra ==`a`|| letra ==`i` ||letra == `u` ||letra == `e`|| letra == `o`){
    console.log(`A letra digitada é uma vogal!!`);
}
else{
    console.log (`A letra digitada é uma consoante!!`);
}