/*Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only*/


const array =[3,5,6,7,8,4,2,1,66,77,100];
const evenArray=[];

for (let index = 0; index < array.length; index++) {
    if(array[index] % 2 == 0){
        evenArray.push(array[index]);
    }
    
}

console.log(evenArray);
