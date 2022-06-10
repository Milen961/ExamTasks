// function towns(input){
//   let finalResult = {};
//   for (let tokens of input) {
//       let info = tokens.split(' | ');
//       let townName = info[0];
//       let latitude = Number(info[1]).toFixed(2);
//       let longitude = Number(info[2]).toFixed(2);
//       finalResult.town = townName;
//       finalResult.latitude = latitude;
//       finalResult.longitude = longitude;
//       console.log(finalResult);
//   }
// }
// towns(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625'])


function solve(input){
 let finalResult = {}
 for (const token  of input) {
   let info = token.split( ' | ')
   let townName = info[0];
   let latitude = Number(info[1]).toFixed(2);
   let longitude = Number(info[2]).toFixed(2);
   finalResult.town = townName;
   finalResult.latitude = latitude;
   finalResult.longitude = longitude;
   console.log(finalResult);
 }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])