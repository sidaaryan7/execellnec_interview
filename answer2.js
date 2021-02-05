/*Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]
*/





const array =[0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0]
var max=0;
var current = 0;

for (let index = 0; index < array.length; index++) {
    if(array[index] == 1){
        current++;
    }else{
        if(current > max ){
            max=current;
        }
        if(max>=array.length/2){
            return max;
        }
        current = 0;
    }
    
}

console.log(Math.max(max,current));