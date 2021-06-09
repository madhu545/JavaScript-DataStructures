let randomNoArray = new Array();
for (let i = 0; i < 10; i++) {
    randomNoArray.push(Math.floor(Math.random() * 1000));
}
console.log("Random No's are: "+randomNoArray);

let sortArray = randomNoArray.sort();
console.log("Sorted Array: "+sortArray);

let secondLargest = randomNoArray[randomNoArray.length-2];
let secondSmallest = randomNoArray[1]

console.log("Second Largest Number is: " +secondLargest);
console.log("Second Smallest Number is: " +secondSmallest);

