function solve(arr){
  let result = [];
  let biggest = arr[0]
  for (let index = 0; index < arr.length; index++) {
     let curNum = arr[index];
     if(curNum >= biggest){
         result.push(curNum)
         biggest = curNum;

     }
      
  }
  return result;
}
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])