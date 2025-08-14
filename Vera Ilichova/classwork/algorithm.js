
// let one = [1 , 4];
// let two = [ 2, 8];

// //[1, 2, 2, 3, 4, 5, 6, 8, 9, 11]
// //Данная функция принимает два отсортированных массива и возвращает один отсортированный

// function merge (one, two) {
//     let result = [];
//     let indexOne = 0;
//     let indexTwo = 0;
//     while(indexOne < one.length && indexTwo < two.length) {
//         if(one[indexOne] < two[indexTwo]) {
//            result.push(one[indexOne]);
//            indexOne++;
//         } else {
//             result.push(two[indexTwo]);
//             indexTwo++;
//         }
//     }

//     return result.concat(one.slice(indexOne)).concat(two.slice(indexTwo));
// }

// console.log(merge(one, two));
// let arr = [4, 1, 0 , -5 , 55, 32, 27, 9 , 12];

// function mergeSort(arr) { // 38 27 43 3 // // 38 27
//     //base case
//     if(arr.length === 1) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);

//     let leftArray = arr.slice(0, mid); // 38 27 43 3. // 38 27. // 38 // 3 
//     let rightArray = arr.slice(mid); // 9 82 10.      // 43 3.  // 27 // 43

//     let leftResultArray = mergeSort(leftArray); // 38 27 43 3 // 38 27 // 38 // 27 38
//     // leftResultArray = 38
//     // 27 38
//     // 3, 27, 38, 43

//     let rightResultArray = mergeSort(rightArray); // 27  // 43 3 //  9 82 10.
//     // rightResultArray = 27
//     // 3 43
//     // 9 10 82

//     let mergeResult = merge(leftResultArray, rightResultArray); // 27 38 // 3 43
//     // 27, 38 and 3 , 43  =. 3, 27, 38, 43
//     // 3, 27, 38, 43 and  9 10 82 =. 3, 9, 10, 27, 38, 43, 82

//     return mergeResult;

// }

// console.log(mergeSort(arr));


function findSumIndex(arr) {
    for(let i = 0; i < arr.length; i++) { // n
    
        // i - index current element
    
        let sumLeft = 0;
        let sumRight = 0;
    
        for(let j = 0; j < i; j++) {   // n
            sumLeft = sumLeft + arr[j];
        }
       
        for(let k = i + 1; k < arr.length; k++) {  // n
            sumRight = sumRight + arr[k];
        }
    
        if(sumLeft == sumRight) {  // 1 
            return i;
        }

       n * ( n + n) = 2n * n = n ^2
    }
}

function getPrefixIndex() {
  let arr = [1, 7, 3, 6, 5, 6];
  let sumValue = 0;
  for (let i = 0; i < arr.length; i++) {
    sumValue += arr[i];
  }
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    // index = 0, value === 1, sumLeft === 0, sumRight = sumValue - value
    let sumRight = sumValue - arr[i] - sumLeft;
    if (sumRight === sumLeft) {
      console.log(i);
      break;
    }
    sumLeft += arr[i];
  }
}
getPrefixIndex();