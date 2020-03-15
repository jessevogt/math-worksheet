class Symbol {
    representation;

    eval() {

    }
}

class Operation extends Symbol {
    constructor(op) {
        super();
        this.op = op;
        this.representation = this.op;
    }

    static randomOperation() {
        return [ADDITION, SUBTRACTION][randomInt(0, 1)]
    }
}

ADDITION = Object.freeze(new Operation("+"));
SUBTRACTION = Object.freeze(new Operation("-"));

class Constant extends Symbol {
    constructor(value) {
        super();
        this.value = value;
        this.representation = value.toString();
    }
}

class Unknown extends Symbol {
    representation = "X"
}

class Node {
    value;
    left = null;
    right = null;

    constructor(value, left, right) {
        /**
         * @param {Symbol} value
         * @param {Node} left
         * @param {Node} right
         */
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Equation {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

function randomInt(min, max) {
    /**
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    /**
     * https://stackoverflow.com/a/12646864
     */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectRandomItem(array) {
    return array[randomInt(0, array.length - 1)]
}

/**
 * addition: 2-3 where each in range 0 - 10, no bound on result
 * addition: 2 where one must be multiple of 10 and total <= 100
 * subtraction: 2 each in range 0 - 10 and result must be positive
 */

class Spec {
    operation;
    itemCountFunc;
    itemGenerator;
    resultValidator;

    constructor(operation, itemCountFunc, itemGenerator, resultValidator) {
        this.operation = operation;
        this.itemCountFunc = itemCountFunc;
        this.itemGenerator = itemGenerator;
        this.resultValidator = resultValidator;
    }

    generate() {
        for (let attempt = 0; attempt < 100; ++attempt) {
            const count = this.itemCountFunc();
            const symbols = [];
            for (let t = 0; t < count; ++t) {
                symbols[t] = this.itemGenerator();
            }
        }
    }
}

ADDITION, randomInt(2, 3), randomInt(0, 10)
ADDITION, 2, [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let t = 0; t < 10; t++) {
    /*const operation = Operation.randomOperation()
    const maxSymbolCount = operation === ADDITION ? 4 : 3;
    const equa*/
    console.log(selectRandomItem([10, 20, 30, 40, 50, 60, 70, 80, 90]));
//    const symbolCount = randomInt(3, 4);
//    const equalTo = randomInt(5, 19);

    ADDITION.op = "*"
    console.log(ADDITION)

}