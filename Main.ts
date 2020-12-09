import { barrelSort } from "./Barrel_sort";
import { bubbleSort} from "./Bubble_sort";
import { insertionSort } from "./Insertion_sort";
import { mergeSort } from "./Merge_sort";
import { selectionSort } from "./Selection_sort";
import { quickSort } from "./Quick_sort";

function test(sort, list){
    let beginDate = new Date().getTime();
    console.log("BeginTime: "+beginDate);
    console.log(sort(list));
    let endDate = new Date().getTime();
    console.log("CostTime:" + (endDate - beginDate));
    console.log("-----------------------------------");
}
function radomArray(len:number){
    var arr = []
    while(arr.length < len){
        var randomnumber=Math.ceil(Math.random()*len)
        var found=false;
        for(var i=0;i<arr.length;i++){
            if(arr[i]==randomnumber){found=true;break}
        }
        if(!found)arr[arr.length]=randomnumber;
    }
    return arr;
}


let testArray = radomArray(5000);
console.log("Raw array");
console.log(testArray);
console.log("BarrelSort Test");
test(barrelSort, testArray);
console.log("BubbleSort Test");
test(bubbleSort, testArray);
console.log("InsertionSort Test");
test(insertionSort, testArray);
console.log("SelectionSort Test");
test(selectionSort, testArray);
console.log("MergeSort Test");
test(mergeSort, testArray);
console.log("QuickSort Test");
test(quickSort, testArray);