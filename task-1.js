/*Zadanie 1. Pakowanie towarów*/

function isEnoughCapacity(products, containerSize) {

    let totalProducts = 0 ;
    for (let product in products) {
        totalProducts += products[product];
    }

    return totalProducts <= containerSize;

}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
);
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
);
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7));


/*
        true
VM49:15 false
VM49:17 true
VM49:19 false */