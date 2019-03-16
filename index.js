var array = [1, 2, 3, 4, 5, 6];
var array1 = ["a", "b", "c"];


var dummy = function(a, b, c) {
   return a;
   console.log(a, b, c);
};

var change = function() {
  console.log("input changed!!!!");
};

window.onload = function () {
    var listRef = document.querySelector("#myList");

    array1.forEach(function (element, index) {
        listRef.innerHTML += "<li>" + element + "</li>";
    });
};




