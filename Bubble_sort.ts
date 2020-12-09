function main(arr:number[]){
    let list = arr;
    let max:number;
    for(let i=0;i<list.length;i++){
        for(let j=1;j<list.length-i;j++){
            if(list[j-1]>list[j]){
                max = list[j-1];
                list[j-1] = list[j];
                list[j] = max; 
            }
        }
    }
    return list;
}

export function bubbleSort(arr:number[]){
    return main(arr);
}