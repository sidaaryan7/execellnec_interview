/*Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result. */



fetch('www.example.com/api/get/1 ')
  .then(response => response.json())
  .then(data => console.log(data));