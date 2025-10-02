function quickSort(arr){
if(arr.length<=1) return arr;

let pivot = arr[arr.length-1];
let left = [], right = [];

for(let i = 0; i<arr.length-1; i++){
      if(arr[i]<pivot){
        left.push(arr[i]);
      }else{
        right.push(arr[i]);
      }
}

return [...quickSort(left), pivot, ...quickSort(right)]
}

const a1 = [2, 5, 1, 4, 3];
const a2 = [9, 0, 3, 1, 8];
const a3 = [4, 3, 9, 1, 6, 8];

console.log(quickSort(a1));
console.log(quickSort(a2));
console.log(quickSort(a3));