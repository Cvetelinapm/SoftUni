function solve(password) {
    let isValidPassLength = validateLenght(password);
    let isOnlyLettersAndDigits = validateLettersAndDigits(password);
    let areAtLeastTwoDigits = validateAtLeastTwoDigits(password);

    if (areAtLeastTwoDigits && isValidPassLength && isOnlyLettersAndDigits) {
        console.log('Password is valid')
    } else {
        if (!isValidPassLength) {
            console.log('Password must be between 6 and 10 characters')
        }
        if (!isOnlyLettersAndDigits) {
            console.log('Password must consist only of letters and digits')
        }
        if (!areAtLeastTwoDigits) {
            console.log('Password must have at least 2 digits')
        }
    }
    function validateLenght(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        }
        return false;
    }
    function validateLettersAndDigits(pass) {
        pass = pass.toString();
        let isCorrect = true;
        for (let i = 0; i < pass.length; i++) {
            let currentElement = pass[i].toUpperCase();
            let element = currentElement.charCodeAt();
            if ((element >= 48 && element <= 57) || (element >= 64 && element <= 90)) {
                isCorrect = true;
            } else {
                return false;
            }
        }
        if (isCorrect) {
            return true;
        }
    }
    function validateAtLeastTwoDigits(pass) {
        pass = pass.toString();
        let digits = [];
        for (let i = 0; i < pass.length; i++) {
            const element = pass[i].charCodeAt();
            if (element >= 48 && element <= 57) {
                digits.push(element)
            }
        }
        if (digits.length >= 2) {
            return true;
        } else {
            return false;
        }
    }
}
solve('MyP1hgh$#')