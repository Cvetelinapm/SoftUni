let solution = (() => {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    function restock(arr) {
        let qty = Number(arr[1]);
        let microelement = arr[0];
        ingredients[microelement] += qty;
        return 'Success'
    };
    function prepare(arr) {
        let reciepe = arr[0];
        let qty = Number(arr[1]);
        if (reciepe === 'apple') {
            if (ingredients.carbohydrate >= 1 * qty && ingredients.flavour >= 2 * qty) {
                ingredients.carbohydrate -= 1 * qty;
                ingredients.flavour -= 2 * qty;
                return 'Success'
            } else {
                if (ingredients.carbohydrate < 1 * qty) {
                    return `Error: not enough carbohydrate in stock`
                } else {
                    return `Error: not enough flavour in stock`
                }
            }

        } else if (reciepe === 'lemonade') {
            let message = '';
            if (ingredients.carbohydrate < qty * 10) {
                message = `Error: not enough carbohydrate in stock`
            } else if (ingredients.flavour < qty * 20) {
                message = `Error: not enough flavour in stock`
            }
            if (message === '') {
                ingredients.carbohydrate -= qty * 10;
                ingredients.flavour -= qty * 20;
                message = 'Success'
            }
            return message

        } else if (reciepe === 'burger') {
            let message = '';
            if (ingredients.carbohydrate < qty * 5) {
                message = 'Error: not enough carbohydrate in stock'
            } else if (ingredients.fat < qty * 7) {
                message = 'Error: not enough fat in stock'
            } else if (ingredients.flavour < qty * 3) {
                message = 'Error: not enough flavour in stock'
            }

            if (message === '') {
                ingredients.carbohydrate -= qty * 5;
                ingredients.fat -= qty * 7;
                ingredients.flavour -= qty * 3;
                message = 'Success'
            }
            return message
        } else if (reciepe === 'eggs') {
            let message = '';
            if (ingredients.protein < qty * 5) {
                message = 'Error: not enough protein in stock'
            } else if (ingredients.fat < qty * 1) {
                message = 'Error: not enough fat in stock';
            } else if (ingredients.flavour < qty * 1) {
                message = 'Error: not enough flavour in stock';
            }
            if (message === '') {
                ingredients.protein -= qty * 5;
                ingredients.fat -= qty * 1;
                ingredients.flavour -= qty * 1;
                message = 'Success'
            }
            return message;

        } else if (reciepe === 'turkey') {
            let message = '';
            if (ingredients.protein < qty * 10) {
                message = 'Error: not enough protein in stock';
            } else if (ingredients.carbohydrate < qty * 10) {
                message = 'Error: not enough carbohydrate in stock';
            } else if (ingredients.fat < qty * 10) {
                message = 'Error: not enough fat in stock';
            } else if (ingredients.flavour < qty * 10) {
                message = 'Error: not enough flavour in stock';
            }

            if (message === '') {
                ingredients.protein -= qty * 10;
                ingredients.carbohydrate -= qty * 10;
                ingredients.fat -= qty * 10;
                ingredients.flavour -= qty * 10;
                message = 'Success'
            }
            return message;
        }
    };
    function report(){
        return `protein=${ingredients[protein]} carbohydrate=${ingredients[carbohydrate]} fat=${ingredients[fat]} flavour=${ingredients[flavour]} `
    }

    return function (command){
        let tokens = command.split(' ');
        let action = tokens.shift();
        if(action === 'restock'){
           return restock(tokens);
        }else if(action === 'prepare'){
            return prepare(tokens);
        }else if(action === 'report'){
            return report();
        }
    }
})()

console.log(solution(("restock flavour 50")))

