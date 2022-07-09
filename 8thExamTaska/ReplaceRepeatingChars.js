function solve(text){
 let unique = '';
 for (let index = 0; index < text.length; index++){
     let currentChar = text.charAt(index);
     let nextChar = text.charAt(index + 1)
     if (currentChar !== nextChar){
         unique += currentChar;

     }
 }
 console.log(unique)
}
solve('aaaaabbbbbcdddeeeedssaa')