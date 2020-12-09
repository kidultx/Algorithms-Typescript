function main(){
    console.log('Begin');
    let list:number[] = [3,5,7,1,3,9,12,323];
    console.log(shellSort(list));


    console.log('End');
}

function shellSort(arr:number[]){
    let len = arr.length;
    let temp,gap = 1;
    while(gap<len/3){
        gap = gap*3+1;
    }
    for(gap; gap>0; gap = Math.floor(gap/3)){
        for(let i = gap; i<len;i++){
            temp = arr[i];
            for(let j = i-gap;j>0&&arr[j]>temp; j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[i+gap] = temp;
        }
    }
    return arr;
}

main();