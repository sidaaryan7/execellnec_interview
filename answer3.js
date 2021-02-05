/*Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);*/



const array=[0,1,2,3,4,5,6,7,7,8,9,10];
/* array can be of any length e.g 101 but here i keep it of short length */

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        
        if(array[i]==array[j]){
            console.log(array[j])
        }
    }
    
}