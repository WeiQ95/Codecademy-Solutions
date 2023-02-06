const itemArray = array => {
  const newArray = array.map(item => {
    console.log(`item is ${item.item}`);
    return item.item;});
//    console.log(newArray);
   return newArray;
}

const groceries = array => {
    const itemList = itemArray(array);
    console.log(itemList);
    let str1 = "";
    for(let i = 0; i < itemList.length; i++){
      if(i==0){
        str1 = itemList[i];
        console.log(str1);
      }
      else if(i<itemList.length-1){
        str1 += `, ${itemList[i]}`;
        console.log(str1);
      }
      else {
        str1 += ` and ${itemList[i]}`;
        console.log(str1);
      }     
}
return str1;
}

groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])