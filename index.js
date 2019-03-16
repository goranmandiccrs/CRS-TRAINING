var array = [1, 2, 3, 4, 5, 6];
var array1 = ["a", "b", "c"];


var dummy = function() {
   console.log("hello");
};


window.onload = function () {
    var listRef = document.querySelector("#myList");

    array1.forEach(function (element, index) {
        listRef.innerHTML += "<li>" + element + "</li>";
        console.log(index);
    });


};




