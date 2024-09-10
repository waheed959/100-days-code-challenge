function area(length, width) {
    console.log(length * width);
}
//Refactored into an arrow function
var Area = function (length, width) { return console.log(length * width); };
area(2, 5);
Area(2, 5);
