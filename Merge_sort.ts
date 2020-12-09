function main(arr:number[]){
    return mergeSort2(arr);
}

function mergeSort2(arr:number[]) {  // 采用自上而下的递归方法
    let len = arr.length;
    if(len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort2(left), mergeSort2(right));
}

function merge(left, right)
{
    let result = [];

    while (left.length && right.length) { 
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

export function mergeSort(arr:number[]){
    return main(arr);
}