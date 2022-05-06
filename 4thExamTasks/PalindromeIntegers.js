function palindromInteger(inputArr) {
    let arrOfNums = inputArr;
    function isPalindrom(number) {
        let startNum = number;

        let reversedNum = Number(number.toString().split("").reverse().join(""));
        if (startNum === reversedNum) {
            return true;
        } else {
            return false;

        }
    }
    for (let index = 0; index < arrOfNums.length; index++) {
        let currentNum = arrOfNums[index];
        console.log(isPalindrom(currentNum));

    }
}
palindromInteger([123, 323, 421, 121]);