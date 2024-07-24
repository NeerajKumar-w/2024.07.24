//first program
let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(1, 2, 3, 4, 5);
let array3 = new Array(5);
array3[0] = 1;
array3[1] = 2;
array3[2] = 3;
array3[3] = 4;
array3[4] = 5;
let array4 = [];
let array5 = Array.from([1, 2, 3, 4, 5]);
let array6 = Array.of(1, 2, 3, 4, 5);
let array7 = new Array(5).fill(0);
let array8 = [1, 2, 3];
let array9 = [...array8, 4, 5];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);
console.log(array6);
console.log(array7);
console.log(array9);
//second program
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); 
//third program
function rotateRight(array, steps) {
    let length = array.length;
    steps = steps % length;
    return array.slice(-steps).concat(array.slice(0, -steps));
}
let numlist = [1, 2, 3, 4, 5];
let rotatedRight = rotateRight(numlist, 2);
console.log(rotatedRight);


//fourth program

let array = [1, 2, 4, 5];
array.splice(2, 0, 3);
console.log(array);

//fifth program

let array_ = [1, 2, 3, 4, 5];
array_.splice(2, 1); 
console.log(array_); 