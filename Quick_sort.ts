function main(arr:number[]){
    return quickSort2(arr,'','');
}

function quickSort2(arr, left, right){
    let len = arr.length,
        partitionIndex;
    left = typeof left != 'number'?0:left;
    right = typeof right != 'number'?len-1:right;
    if(left<right){
        partitionIndex = partition(arr, left, right);
        quickSort2(arr, left, partitionIndex-1);
        quickSort2(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left, right){
    let pivot = left,
        index = pivot + 1;
    for(let i = index;i <= right; i++){
        if(arr[i] < arr[pivot]){
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index -1);
    return index-1;
}


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


export function quickSort(arr:number[]){
    return main(arr);
}