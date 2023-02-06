const convertToBaby = array => {
    const babyArray = [];
    for(let i = 0; i < array.length ; i++){
      const babyName = 'baby ' + array[i];
      babyArray.push(babyName);
    }
    return babyArray;
  }
//   Should use map() but question did not allow me to do so
//   const convertToBaby = array => array.map(animal => {return 'baby ' + animal});




  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 