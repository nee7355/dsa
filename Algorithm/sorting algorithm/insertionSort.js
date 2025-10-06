function insertionSort(arr){
     if(!arr) return;

     for( let i = 1; i<arr.length; i++){

        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
     }
     console.log(arr);
}

function insertionSort2(arr){
    if(!Array.isArray(arr)) return;
    
    for(let i = 1; i<arr.length;  i++){
        let key =  arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }

    console.log(arr);
}
function insertionSort3(arr){
    if(!Array.isArray(arr)) return;

    for(let i = 1; i<arr.length;  i++){
        let j =  i-1;
        let key = arr[i];
        while(j>=0 && arr[j] > key){
  
            arr[j+1] = arr[j];
        }
        arr[j+1] = key;
    }
    return arr;
}
const arr = [2, 5, 1, 4, 3];
const a2 = [9, 0, 3, 1, 8];
const a3 = [4, 3, 9, 1, 6, 8];

insertionSort2(arr);
insertionSort2(a2);
insertionSort2(a3);

