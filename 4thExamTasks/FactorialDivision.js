function factorialDivision(firstNumber, secondNUmber){
function factorielCalculator(number){
    let result = 1;
    while (number != 1){
        result *= number;
        number -= 1;


    }
    return result;

}
let finalDivisionResult =
factorielCalculator(firstNumber) / factorielCalculator(secondNUmber);
console.log(finalDivisionResult.toFixed(2));
}
factorialDivision(5,2)
