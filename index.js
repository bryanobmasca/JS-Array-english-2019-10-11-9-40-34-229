// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof a); //string
console.log(typeof b); //object - array

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0, x = a.length; i<x; i++){
	a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
case1 = colors.join(" ");
console.log(case1);
// case 2 output: 'Red+Green+White+Black'
case2 = colors.join("+");
console.log(case2);
// case 3 output: 'Red,Green,White,Black'
case3 = colors.join(",");
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a, b){return b-a});
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var counts = {};
var compare = 0;
var mostFrequent;
   for(let i = 0, len = a.length; i < len; i++){
       var word = a[i];
       if(counts[word] === undefined){
           counts[word] = 1;
       }
       else{
           counts[word] = counts[word] + 1;
       }
       if(counts[word] > compare){
             compare = counts[word];
             mostFrequent = a[i];
       }
    }
console.log(mostFrequent);