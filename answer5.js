/* Assume there is a object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.*/





var obj = {
    4:  "abc",
    10 : "ab2",
     5: "abc3",
     6: "abc5"
   }

  console.log(Object.entries(obj).sort((a,b) => b[1]-a[1]))