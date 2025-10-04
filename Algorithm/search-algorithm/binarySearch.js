function  binarySearchIterative(arr, key){
    let  left = 0;
    let right = arr.length-1;

    while(left<=right){
        let mid  = Math.floor((left+right)/2);
        if(arr[mid]===key) return mid;
        else if(arr[mid]<key) left = mid+1;
        else right = mid-1; 
    }
    return -1;
}

function binarySearchRecursive(arr, key, left = 0, right = arr.length - 1){
    if(left>right) return -1;
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===key) return mid;
    else if(arr[mid]<key) return binarySearchRecursive(arr, key , mid+1, right);
    else return binarySearchRecursive(arr, key, left, mid-1);
} 
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearchRecursive(a1, 7));