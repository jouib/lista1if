var teclado = require("prompt-sync")();
var letra = teclado("Digite uma letra:");
if (letra == "A" || letra == "I" || letra == "U" || letra == "E" || letra == "O" || letra == "a" || letra == "i" || letra == "u" || letra == "e" || letra == "o") {
    console.log("A letra digitada \u00E9 uma vogal!!");
}
else {
    console.log("A letra digitada \u00E9 uma consoante!!");
}
