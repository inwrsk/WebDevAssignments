/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
let timestamp1=new Date()

function calculateTime(n) {
    let a=0
    for (let i=0;i<n;i++){
        a+=1
    }
}

calculateTime(100000);
let timestamp2=new Date()
console.log(timestamp2.getTime()-timestamp1.getTime())//1

calculateTime(100000*100);
let timestamp3 = new Date();
console.log(timestamp3.getTime() - timestamp2.getTime())//15

calculateTime(100000*10000);
let timestamp4 = new Date();
console.log(timestamp4.getTime() - timestamp3.getTime())//1009