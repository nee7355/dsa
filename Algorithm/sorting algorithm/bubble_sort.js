function bubbleSort(arr){
    if(!arr) return;
   
    for(let i = 0; i<arr.length; i++){

        let swapped = false;
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                swapped = true;
               
            }
        }
         if(!swapped) break;
    }
    console.log(arr);
}

let a1 = [5,3,4,1,2];
let a2 = [8,7,4,1,2];
let a3 = [10,3,11,1,20];

bubbleSort(a1);
bubbleSort(a2);
bubbleSort(a3);
