// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

//My answer
const subLength = (word,char) => {
    let count = 0;
    let left = 0;
    let right = 0;
    for(let i = 0; i < word.length; i++){
      if(word[i]==char){
        count++;
        console.log(count);
      }}
      
      if (count !== 2){
        console.log('Not = 2')
        return 0;
        }
      else {
        for(let k = 0; k < word.length; k++){
      if(word[k]===char){
        left = k;
        console.log(`left is ${k}`)
        break;
      }}
  
        for(let j = word.length-1 ; j >= 0 ; j--){
          if(word[j]===char){
            right = j;
            console.log(`right is ${j}`)
            break;
          }
        }
        return right - left + 1;
      }
    }


//Solution is better because less memory used. 
// Solution uses len = -1 as a placeholder and an if statement to check if len = -1. First time len will replace i. Second time i will minus len and +1.


/* const subLength = (str, char) => {
  let charCount = 0;
  let len = -1;
  
  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
}; */