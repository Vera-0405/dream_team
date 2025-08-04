


console.log('one.js');


const one = {
    a: 1,
    b: 2
};

const two = {
    c: 3
};


export default class Car {
    constructor () {
        this.color = 'red';
    }
}

export {one, two};