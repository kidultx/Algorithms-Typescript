function main(arr:number[]){
    let list = arr;
    let temp:number;
    for(let i=0;i<list.length;i++){
       let min = i;
       for(let j =i+1;j<list.length;j++){
           if(list[j]<list[min]){
               min = j;
           }
       }
       if(min!=i){
           temp = list[min];
           list[min] = list[i];
           list[i] = temp;
       }
    }
    return list;
}

export function selectionSort(arr:number[]){
    return main(arr);
}