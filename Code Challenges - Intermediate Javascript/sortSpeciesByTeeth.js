const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// This function shows how to write a sort helper function in the form of compareTeeth. Used to access the numTeeth in all the objects.

const sortSpeciesByTeeth = animals => {
  const compareTeeth = (animal1 , animal2) => animal1.numTeeth > animal2.numTeeth;
  return animals.sort(compareTeeth);  
}
// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]