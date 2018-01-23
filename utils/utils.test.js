const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    if (res != 44) {
        throw new Error(`Expected 44, but got ${res}`);
    }
});



it('square is correct', () => {
    var square = utils.square(2);
    if (square != (2*2)) {
        throw new Error(`Error this result is 4 but got ${square}`);
    }
});