//algorithm

const n=5;
function recur(n){ 
    if (n===0) { return n};
    
    let res = n+recur(n-1);    
return res;
}
console.log(recur(n));


// people = [10, 55, 70, 20, 90, 85], max limit = 100 kg
// Найти минимальное количество лодок, которое нужно , что бы
// перевезти всех людей на другой берег
let boat = 0;
const people = [10, 55, 70, 20, 90, 85];
people.sort();
console.log(people);
const maxLimit = 100;
let left = 0;
let right = people.length - 1;
while (left <= right) {
  boat++;
  if (people[left] + people[right] <= maxLimit) {
    left++;
    right--;
  } else right--;
}
console.log(boat);