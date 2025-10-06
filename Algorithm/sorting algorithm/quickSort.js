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

/* 
quick sort follow divide  and conqure method 

Quick sort is  divide  and conquer sorting algorithm.
quick  sort  is divide  and conquare  sorting algothithm
* It works by picking one  element as piot and  partitioning  the  array around that pivot  so that 

*/

function quickSort2(arr){
  if(arr.length<=1) return arr;
  const  pivot = arr[arr.length-1];
  const left = [];
  const right = [];

  for(let i = 0;  i<arr.length-1; i++){
      if(arr[i]<pivot){
        left.push(arr[i]);
      }else{
        right.push(arr[i]);
      }
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)];
}
 
function quickSort3(arr){
  if(arr.length<=1) return  arr;

  const pivot = arr[arr.length-1];
  const left = [];
  const right = [];

  for(let i = 0; i<arr.length-1; i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return [...quickSort3(left),pivot, ...quickSort3(right)];
}

/*  quick  sort using in place iterative method  */


function partition(arr, low, high){
  let pivot = arr[high];
  let i = low-1;
  for(let j  = low; j<high; j++){
    if(arr[j] < pivot){
 
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i+1;
}
function quickSortInPlance(arr, low = 0, high = arr.length-1){
  if(low<high){
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high);
  }

  return arr;
}

function quickSort4(arr){
  if(arr.length<=1) return arr;
  const pivot  = arr[arr.length-1];
  const left = [];
  const right = [];
  for(let i = 0; i<arr.length - 1; i++){
    if(arr[i]<pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort4(left),  pivot, ...quickSort4(right)];
}

function  partition2(arr, low, high){

  const pivot = arr[high];
  const i = low-1;

  for(let j = low; j<high; j++){
    if(arr[j]<pivot){
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i+1
}

function quickSortInPlance2(arr, low, high){
  const pivot = partition(arr, low, high);
  quickSortInPlance2(arr, low, pivot-1)
  quickSortInPlance2(arr, pivot+1, high)
 
  return arr
}

/* ******************************* */

function quickSortInPlance3(arr, low=0, high=arr.length-1){

  if(low<high) {
    const pivot = quickSortPivot3(arr, low, high);
    quickSortInPlance3(arr, low, pivot-1);
    quickSortInPlance3(arr, pivot+1, high)
  }
  
 
  return arr;
}

function quickSortPivot3(arr, low, high){

  const pivot = arr[high];
  let i = low-1;
  for(let j = low; j<high; j++){
    if(arr[j]<pivot){
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
  return i + 1;
}
const a1 = [2, 5, 1, 4, 3];
const a2 = [9, 0, 3, 1, 8];
const a3 = [4, 3, 9, 1, 6, 8];

console.log(quickSortInPlance3(a1));
console.log(quickSortInPlance3(a2));
console.log(quickSortInPlance3(a3));