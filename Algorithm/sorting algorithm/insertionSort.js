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

const arr = [2, 5, 1, 4, 3];
const a2 = [9, 0, 3, 1, 8];
const a3 = [4, 3, 9, 1, 6, 8];

insertionSort(arr);
insertionSort(a2);
insertionSort(a3);

