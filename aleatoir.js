var readline = require("readline-sync");

var saisie = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
var fin = false;

while(!fin){
    if(isNaN(saisie)){
        console.log("Ce n'est pas un chiffre");
        console.log("Veuillez sasir à nouveau:");
        var saisie = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
    } else {
        console.log("c'est un ciffre!")
        console.log(saisie);
        fin = true;
    }
}
