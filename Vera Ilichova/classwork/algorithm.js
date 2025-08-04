<<<<<<< HEAD
let one = [1 , 4];
let two = [ 2, 8];

//[1, 2, 2, 3, 4, 5, 6, 8, 9, 11]
//Данная функция принимает два отсортированных массива и возвращает один отсортированный

function merge (one, two) {
    let result = [];
    let indexOne = 0;
    let indexTwo = 0;
    while(indexOne < one.length && indexTwo < two.length) {
        if(one[indexOne] < two[indexTwo]) {
           result.push(one[indexOne]);
           indexOne++;
        } else {
            result.push(two[indexTwo]);
            indexTwo++;
        }
    }

    return result.concat(one.slice(indexOne)).concat(two.slice(indexTwo));
}

console.log(merge(one, two));
let arr = [4, 1, 0 , -5 , 55, 32, 27, 9 , 12];

function mergeSort(arr) { // 38 27 43 3 // // 38 27
    //base case
    if(arr.length === 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let leftArray = arr.slice(0, mid); // 38 27 43 3. // 38 27. // 38 // 3 
    let rightArray = arr.slice(mid); // 9 82 10.      // 43 3.  // 27 // 43

    let leftResultArray = mergeSort(leftArray); // 38 27 43 3 // 38 27 // 38 // 27 38
    // leftResultArray = 38
    // 27 38
    // 3, 27, 38, 43

    let rightResultArray = mergeSort(rightArray); // 27  // 43 3 //  9 82 10.
    // rightResultArray = 27
    // 3 43
    // 9 10 82

    let mergeResult = merge(leftResultArray, rightResultArray); // 27 38 // 3 43
    // 27, 38 and 3 , 43  =. 3, 27, 38, 43
    // 3, 27, 38, 43 and  9 10 82 =. 3, 9, 10, 27, 38, 43, 82

    return mergeResult;

}

console.log(mergeSort(arr));
=======
//Sliding Window :

//arr = [2, 1, 5, 1, 3, 2];  k = 3; (length of subarray)

//2 1 5 = 8   // get , sum 
//1 3 2 = 6
//1 5 1 = 7
//5 1 3 = 9   Max Sum = 9;

//2 1 5
//  1 5 1
//    5 1 3
//      1 3 2
      
//let maxSum = 0;      
//for( let i = 0; i < arr.length-k; i++) { // 0 1
    
  //  let sum = 0;
   // for(let j = i; j < i + 3; j++ ) { // 0 < 3, 1 < 4
    
    //    sum = sum + arr[j]; // arr[0] + arr[1] + arr[2] // arr[1] + arr[2] + arr[3]
    
    //}
    //if( maxSum < sum) {
    //    maxSum = sum;
    //}
    
//}

//let arr =  [2, 1, 5, 1, 3, 2]; 
//let k = 3;
//console.log(`Max sum  subarray is ${calculateMaxSumSubarray(arr, k)}`);

//function calculateMaxSumSubarray(arr, k) {
//    let maxSum = 0;
//    let startIndex = 0; // индекс элемента , который отнимаем слева от суммы
//    let currentSum = 0;

 //   for(let i = 0; i < arr.length; i++) { 
 //       if( i > k - 1 ) {  
  //          if(maxSum < currentSum) { 
    //            maxSum = currentSum; 
      //      }
      //      currentSum = currentSum - arr[startIndex]; 
      //      startIndex++; 
      //  }
      //  currentSum = currentSum + arr[i];
   // }
   // if(maxSum < currentSum) {
    //    maxSum = currentSum;
   // }
   // return maxSum;
//}
//let arr =  [2, 1, 5, 1, 3, 2]; 
//let k = 3;
//console.log(`Max sum  subarray is ${calculateMaxSumSubarray(arr, k)}`);

//function calculateMaxSumSubarray(arr, k) {
  //  let maxSum = 0;
  //  let startIndex = 0; // индекс элемента , который отнимаем слева от суммы
  //  let currentSum = 0;

    //for(let i = 0; i < arr.length; i++) { 
     //   if( i > k - 1 ) {  
       //     if(maxSum < currentSum) { 
        //        maxSum = currentSum; 
        //    }
        //    currentSum = currentSum - arr[startIndex]; 
        //    startIndex++; 
        //}
        //currentSum = currentSum + arr[i];
    //}
    //if(maxSum < currentSum) {
    //    maxSum = currentSum;
    //}
    //return maxSum;
//}

//let arr =  [2, 1, 5, 1, 3, 2]; 
//let k = 3;
//console.log(`Max sum  subarray is ${calculateMaxSumSubarray(arr, k)}`);

//function calculateMaxSumSubarray(arr, k) {
  //  let maxSum = 0;
   // let startIndex = 0; // индекс элемента , который отнимаем слева от суммы
   // let currentSum = 0;

  //  for(let i = 0; i < arr.length; i++) { 
  //      if( i > k - 1 ) {  
   //         if(maxSum < currentSum) { 
    //            maxSum = currentSum; 
      //      }
      //      currentSum = currentSum - arr[startIndex]; 
        //    startIndex++; 
      //  }
       // currentSum = currentSum + arr[i];
    //}
    //if(maxSum < currentSum) {
     //   maxSum = currentSum;
   // }
   // return maxSum;
//}
>>>>>>> b93cb2f312d867dcea10d638a4178c53fef16f92
