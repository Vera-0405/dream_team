// бинарный поиск
const myArr = [1, 22, 45, 56, 78, 89, 90, 91, 92, 92, 94, 95, 98, 105];

const target = 94;

function findTarget(arr, target) {
    let l = 0;
    let r = (arr.length - 1);
    while (l <= r) {

        let middle = Math.floor((l + r) / 2);
        // console.log(middle);

        if (arr[middle] === target) {
            return middle;
        }
        if (arr[middle] < target) {
            l = middle + 1;
        } else {
            r = middle - 1;
        }
    }
    return -1
}

console.log(findTarget (myArr, target));




printItration(5);
function printItration(a) {
    for(let i = 1; i<=a; i++) {
       console.log(i);
    }
}

console.log(`Recurrent : `);
recurrentPrint(1);

function recurrentPrint(c) {
    if( c === 6) {  // base case
        return;
    }

    console.log(c);
    recurrentPrint(c+1);  //recurrent case
}

printItration(5);
function printItration(a) {
    for(let i = 5; i>=1; i--) {
       console.log(i);
    }
}

console.log(`Recurrent : `);
recurrentPrint(1);

function recurrentPrint(c) {
    if( c === 0) {  // base case
        return;
    }

    console.log(c);
    recurrentPrint(c-1);  //recurrent case
}