function passwordValidator(password) {
    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }
    function isOnlyLattersAndDigits(stringPassword) {
        for (let currentCharIndex of stringPassword) {
            let currChar = currentCharIndex.charCodeAt(0);
            if (
               !(currChar >= 48 && currChar <= 57) &&
               !(currChar >= 65 && currChar <= 90) &&
               !(currChar >= 97 && currChar <= 122)
               ) {
                return false;
            }   
        }
        return true;
    }
    function isHavingAtLeastTwoDifits(stringPassword) {
        let count = 0;
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }
    let isLenghtValid = isLengthEnough(password)
    let isLettersAndDigitsOnly = isOnlyLattersAndDigits(password);
    let isContainingAtLeastTwoDigits = isHavingAtLeastTwoDifits(password)
    if (isLenghtValid && isLettersAndDigitsOnly && isContainingAtLeastTwoDigits) {
        console.log("Password is valid");
    }
    if (!isLenghtValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLettersAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isContainingAtLeastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValidator('Pa$s$s')