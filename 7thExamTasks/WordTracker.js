function solve(input){
 // parse input = take first element and split
    let words = input.shift().split(' ')
    let result = {};

    for (let word of words){
        result[word] = 0
    }
 // for each remaining element
 for (let word of input){
      // if element is what we are lokinf for ,add 1 to count 
     if (result.hasOwnProperty(word)){
         result[word] ++;

     }
 }

 // convert result to array
 let sorted =  Object.entries(result)
 // sort by value
 sorted.sort((a, b)  => {
    return (b[1] - a[1]);

 });
 // print result
 for (let [word, count] of sorted) 
 console.log(word, '-', count)
}
solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])