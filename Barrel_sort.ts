function main(list:number[]){
    const MAX:number = 100000;
    let countList:number[] = new Array(MAX);
    let result = [];
    for (let index = 0; index < list.length; index++) {
        countList[list[index]]=1;
    }

    for (let index = 0; index < MAX; index++) {
        if(countList[index]>0){
            result.push(index);
        }
    }
    return result;
}

export function barrelSort(list:number[]){
    return main(list);
}
