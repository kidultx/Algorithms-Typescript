function main(arr:number[]){
    let list = arr;
    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < i; j++) {
            if(list[j]>list[i]){
                list.splice(j,0,list[i]);
                list.splice(i+1,1);
                break;
            }
        }
    }
    return list;
}

export function insertionSort(arr:number[]){
    return main(arr);
}