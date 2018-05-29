// Pull de données du TDD 
var tests = [
  "bangarang",
  "tired",
  "anthony2015",
  "millenials sucks",
  "2098",
  1967,
  0.1,
  "margareth tatcher is " + 100 + "% sexy"
];

for (var input of tests) {
  console.log("Input : " + input + " // Output : " + getMiddle(input));
}

/* Développez la fonction getMiddle(input_text) :

    Si input_text contient un nombre impair d'éléments, la fonction renvoie le caractère du milieu.
    Sinon, elle renvoie les deux caractères du milieu.

Exemples:

    getMiddle("test") renvoie "es"
    getMiddle("testing") renvoie "t"
    getMiddle("middle") renvoie "dd"
    getMiddle("A") renvoie "A"
*/

function getMiddle(str){
    var x = str.length
    if (x%2 == 0){
      console.log(x / 2) // moitiée du nombre entier 
      console.log(x / 2-1) // recupere l'index avant la moitée
      console.log(str[x / 2] + str[x / 2-1])
      console.log(str[x / 2] + str[x / 2-1]) // Cas pair
    } else {
      console.log(str[x / 2 - 0.5]) // Cas impair
    }
  }

// M I D D L E 
// 0 1 2 3 4 5

// getMiddle("test")
getMiddle("testing")
// getMiddle("middle")
// getMiddle("A")

// Method substring
// Mi|dd|le
// millieu de 4 est forcement 2 donc 