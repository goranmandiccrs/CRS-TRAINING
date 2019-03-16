console.log("Hello World");
//alert("Hello world!");

var array = [];

array[0] = 'Hi Bob';
array[1] = 'Hi J';

console.log(array);

var newArray = [1, 2, 3, 4, 5, 6];

var listRef = document.querySelector('#myList');
console.log(listRef);
//console.log(window);

newArray.forEach(function(el){
    listRef.innerHTML += "<li>" + el + "</li>"
});

