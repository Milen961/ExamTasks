// function bombSpecilNumber(array, bomb){
//   let bombNumber = bomb[0];
//   let bombRadius = bomb[1];

//   let indexOfBomb = array.indexOf(bombNumber);
//   while (indexOfBomb !== -1 ){
//       let startExplosionIndex = Math.max(0 , indexOfBomb - bombRadius);
//       let explosionLength = bombRadius * 2 + 1;
//       array.splice(startExplosionIndex, explosionLength)
//       indexOfBomb = array.indexOf(bombNumber)
//   }
//   let sum = 0;
//   for (const number of array) {
//       sum += number;
     
//   }
//   console.log(sum);

// }
// bombSpecilNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]);

