    function merge(arr, left, mid, right, aux){
        let i  = left;
        let j = mid
        let k = left;   

        while(i<mid && j<right){
            if(arr[i]<=arr[j]){
                aux[k++] = arr[i++];
            }else{
                aux[k++] = arr[j++];
            }
        }
        while(i<mid) aux[k++] = arr[i++];
        while(j<right) aux[k++] = arr[j++];

        for(k = left; k<right; k++) arr[k] = aux[k];
    }

    function  mergeSort(arr, left, right, aux){
        //base  case
        if(right-left<=1) return;

        let  mid =  Math.floor((left+ right)/2);
        //recursively divide  left and right part
        mergeSort(arr, left, mid, aux);
        mergeSort(arr, mid, right, aux);

        merge(arr, left, mid, right, aux);
    }

    function mergeSortMain(arr){
        const aux = new Array(arr.length);
        mergeSort(arr, 0, arr.length,aux);

        return arr;
    }
/* ***************************************** */

function  mergeSort2(arr){
    if(arr.length<=1) return arr;
    const mid = Math.floor(arr.length/2);
    const left =  arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge2(mergeSort2(left), mergeSort2(right));
}

function merge2(left, right){
    const result = [];
    let i = 0, j= 0;

    while(i<left.length&& j<right.length){
        if(left[i]< right[j]){
            result.push((left[i]));
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    // add remaining elements
    while(i<left.length) result.push(left[i++]);
    while(j<right.length) result.push(right[j++]);

    return result;
}


/* ********************************* */
function mergeSortMain3(arr){

    const left = 0;
    const right = arr.length;
    const aux = [];
    return mergeSort3(arr, left, right, aux);
}

function mergeSort3(arr, left, right, aux){
    if(left<=right) return;//base case
 
    const mid  = Math.floor((left+right)/2);
    mergeSort3(arr, left, mid, aux) //left helves
    mergeSort3(arr, mid, right, aux) //right helves

    return merge3(arr, left, mid, right, aux);
}

function merge3(arr, left, mid, right, aux){
    if(arr.length>=1) return arr;

    let i = left;
    let j = right;
    let k = left;

    while(i<mid&& j<right){
        if(arr[i]<arr[j]){
            aux[k] = arr[i]; 
            i++; 
        }else{
            aux[k] = arr[j];
            j++;
        }
        k++;
    }
    //copy  remaining element of left
    while(i<mid){
            aux[k] = arr[i];
            i++;
            k++;
    }

    //copy righ t  remaining element

    while(j<right){
        aux[k] = arr[j];
        j++;
        k++;
    }

    //copy the merged elements back into  original array;
}
function mergeSortMain4(arr){

    const aux = [];
    mergeSort4(arr, left=0, right = arr.length, aux)
    return arr;
}
function mergeSort4(arr, left, right, aux){

    if(right-left<=1) return;

    const mid = Math.floor((left+right)/2);
    //left paritition
    mergeSort4(arr, left, mid, aux);
    //right partition
    mergeSort4(arr, mid, right,  aux);

    return merge4(arr, left, mid, right, aux);
}
function merge4(arr, left, mid, right, aux){

    let i = left;
    let  j = mid;
    let k = left;

    while(i<mid&& j<right){
        if(arr[i]<arr[j]){
        aux[k] = arr[i];
            i++;
        }else{
            aux[k] = arr[j];
            j++;
        }
        k++;
    }
    //left remaining  item
    while(i<mid){
        aux[k] = arr[i];
        i++;
        k++;
    }
    //right remaining item
    while(j<right){
        aux[k] = arr[j];
        j++;
        k++;
    }
    
    for(let x = left; x<right; x++){
        arr[x] = aux[x];
    }
}
    const a1 = [2, 5, 1, 4, 3];
    const a2 = [9, 0, 3, 1, 8];
    const a3 = [4, 3, 9, 1, 6, 8];
    
    console.log(mergeSortMain4(a1));
    console.log(mergeSortMain4(a2));
    console.log(mergeSortMain4(a3));