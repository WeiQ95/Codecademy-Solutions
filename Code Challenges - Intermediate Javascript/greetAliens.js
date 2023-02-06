// Write your code here:
const greetAliens = aliens => {
for (let i=0 ; i<aliens.length ; i++){
console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);}}

//There is a forEach() method, however the question did not allow me to use it.
/*
const greetAliens = aliens => 
  aliens.forEach(string => console.log(`Oh powerful ${string}, we humans offer our unconditional surrender!`));
*/


// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);