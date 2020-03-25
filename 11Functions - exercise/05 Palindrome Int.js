function solve(array) {

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        currentElement = currentElement.toString();
        let isEqual = true;

        for (let i = 0; i < (currentElement.length / 2); i++) {
            let element = currentElement[i];
            let secondElement = currentElement[currentElement.length - 1 - i];
            if (element !== secondElement) {
                isEqual = false;
                break;
            }
        }

        if (isEqual) {
            console.log('true');
        } else {
            console.log('false');
        }

    }

}
solve([32,2,232,1010])