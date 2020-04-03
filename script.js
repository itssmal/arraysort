const button = document.getElementById("#sortBtn");
const sorted = document.querySelector("#sortedArr");
const array = [3, 7, 0, 4, 9, 1];
const pre = document.getElementsByTagName("pre")[0];
pre.style.display = "none";
// // let newArr = Array();
// console.log(array);


function bubbleSort(arr) {
    for(let j = 0; j < arr.length; j++ ){
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp; 
            }
        } 
    }
    return arr;
}

function insertSort (arr){
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
        }
    return arr;
}

// function selectionSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let min = Math.min.apply(null, arr)
//         arr[i] = min;
//     }
//     console.log(arr);
//     return arr;
// }
// [3, 7, 0, 4, 9, 1];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[min] > arr[j]){
                min = j;
            }
        }
        if (min !== i){
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

function displayArr() {
    insertSort(array);
    sorted.textContent = "[" + array + "]";
}

function viewCode(){
    if (pre.style.display === "none"){
        pre.style.display = "block"
    } else {
        pre.style.display = "none"
    }
}

// function newArray(){
//     let x = 0;
//     newArr[x] = document.getElementById("#newArr").value;
//     x++;
//     console.log(newArr);
// }

// button.addEventListener("click",displayArr);