function magicSum(array,magicNumber){
 for (let index = 0; index < array.length; index++) {
     let currEle = array[index];
     for (let j = index + 1; j < array.length; j++) {
    let nextEle = array[j]
    let sum = currEle + nextEle;
    if(sum === magicNumber){
        console.log(`${currEle} ${nextEle}`);
    }
         
     }
     
 }
}
magicSum([1, 7, 6, 2, 19, 23],
    8)