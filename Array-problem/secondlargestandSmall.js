
//2nd largest and 2nd smallest element witout sorting array

let randomNoArray = new Array();
for (let i = 0; i < 10; i++) {
    randomNoArray.push(Math.floor(Math.random() * 1000));
}
console.log("Random No's are: "+randomNoArray);

let max1 = Math.max(...randomNoArray)
let max2 = -Infinity;
for (let n1 of randomNoArray) 
    if (n1 > max2 && n1 < max1) 
        max2 = n1;

let min1 = Math.min(...randomNoArray) 
let min2 = +Infinity;
for (let n2 of randomNoArray) 
    if (n2 < min2 && n2 > min1)
        min2 = n2;

console.log("2nd largest number: " + max2);
console.log("2nd smallest number: " + min2);

