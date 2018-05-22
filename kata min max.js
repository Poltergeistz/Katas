/* En Javascript, écrire une fonction “maxEtMin()”telle que :

    1 string constitué de chiffres séparés par des espaces en entrée
    renvoie un string contenant le nombre le plus haut ainsi que le plus bas

Exemple

    maxEtMin("1 2 3 4 5"); // return "5 1"
    maxEtMin("1 2 -3 4 5"); // return "5 -3"
    maxEtMin("1 9 3 4 -5"); // return "9 -5"

*/

function maxEtMin (tableau){
    var splitString = tableau.split(" ");
    var resultMin = Math.min(...splitString);
    console.log(resultMin);
    var resultMax = Math.max(...splitString);
    console.log(resultMax);
    console.log(splitString);
}

maxEtMin("1 9 4 3 2");