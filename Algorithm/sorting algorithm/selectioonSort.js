function selectionSort(arr){
    if(!arr) return;

    for(let i = 0; i<arr.length; i++){

        let minIdx = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[minIdx]){
                minIdx = j;
            }
        }
        if(i!==minIdx){
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    console.log(arr);
}

const arr = [2, 5, 1, 4, 3];
const a2 = [9, 0, 3, 1, 8];
const a3 = [4, 3, 9, 1, 6, 8];
selectionSort(arr);
selectionSort(a2);
selectionSort(a3);