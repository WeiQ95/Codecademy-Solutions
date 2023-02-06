// Write your code here:
const reverseArray = arr => {
    const reverseArr = [];
    for (let i = arr.length -1 ; i>=0 ; i--){
      reverseArr.push(arr[i]);
    }
    return reverseArr;
  }
  
  // When you're ready to test your code, uncomment the below and run:
   
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  
  