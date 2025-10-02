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

    const a1 = [2, 5, 1, 4, 3];
    const a2 = [9, 0, 3, 1, 8];
    const a3 = [4, 3, 9, 1, 6, 8];

    console.log(mergeSortMain(a1));
    console.log(mergeSortMain(a2));
    console.log(mergeSortMain(a3));