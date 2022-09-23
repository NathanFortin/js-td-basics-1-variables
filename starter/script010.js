/*****************************
* 10 - Opérateurs de base
*/

// 1. Déclarer les variables now, ageJohn, ageMark, yearJohn et yearMark
// puis affecter aux trois premières les valeurs 2019, 28 et 33
const now = 2022, ageJohn = 28, ageMark = 33;


// Opérateurs mathématiques

// 2. Affecter à yearJohn sa date de naissance
// (en la calculant à partir de l'année courante et de son âge)
// idem pour yearMark
// puis afficher la date de naissance de John 
// et "Mark est né en …"

const yearJohn = now - ageJohn;
const yearMark = now - ageMark;
console.log("john est né en " + yearJohn); /* + = operateur de concatenation */
console.log(` Mark est né en ${yearMark}` ); /* template string*/

// 3. Afficher l'année à laquelle nous serons dans deux ans
// le double de l'année
// le dixième de l'année



// Opérateurs logiques

// 4. …

console.log(now<2021);


// Opérateur typeof

console.log(typeof "2021");