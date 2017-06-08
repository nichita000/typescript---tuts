// let or const
var str = 'TypeScript';
var num = 65;
var bool = false;
// array
var arrayOfStrings = ['first', 'second', 'third'];
var anotherArrayOfStrings = ['fourth', 'fifth', 'sixth'];
var arrayOfNumbers = [12, 14, 19];
var anotherArrayOfNumbers = [11, 16, 20];
var preparedArray = ['string', 100]; // here we can put only string as first element and number as second !
// enum:
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var currentSeasonNum = Season.Summer; // Season as type. will return as number
var currentSeasonStr = Season[2]; // return string by index
// any
var anyType = 'Hello TypeScript';
anyType = 5; // won't return error , because of any type !
// Null and Undefined
var a = null;
var b = undefined;
var willNull = 5;
willNull = undefined; // We can assign undefined for any type of variables !
// union
var names;
var sum = 36.6;
// type assertion
var someAnyValue = "hello world"; // <== string
var strLength = someAnyValue.length;
// OR
var someUnionValue = "hello world!";
strLength = someUnionValue.length; // operation 'as'
function add(a, b) {
    return a + b;
}
function sumOfNums(a, b) {
    // Some functionality ...
}
function getFullName(firstname, lastname) {
    var fullName = firstname;
    fullName += lastname ? lastname : '';
    return fullName;
}
function getSum(firstNumber) {
    var numberArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numberArray[_i - 1] = arguments[_i];
    }
    var result = firstNumber;
    numberArray.forEach(function (number) {
        result += number;
    });
    return result;
}
var sumOfNumbers = getSum(1, 2, 3); // 6
var anotherSumOfNumbers = getSum(1, 2, 3, 4, 5, 6, 7); // 28
function addOrConcatinate(x, y) {
    return x + y;
}
var result1 = addOrConcatinate(10, 15); // 25
var result2 = addOrConcatinate('TypeScript', '= Power'); // 'TypeScript = Power'
function getInfo(val) {
    return typeof val === 'string' ? 'Name - ' + val : 'Age : ' + val;
}
// function type
var operation;
operation = function (x, y) {
    return x + y;
};
// function type as callback
function mathOp(x, y, operation) {
    var result = operation(x, y);
    return result;
}
var operationFunc;
operationFunc = function (a, b) {
    return a + b;
};
console.log(mathOp(10, 20, operationFunc)); // 30
// lambda
var summ = function (x, y) { return x + y; };
var newResult = summ(15, 35); // 50
var summm = function (x, y) {
    x *= 2;
    return x + y;
};
var anotherResult = summm(15, 35); // 65
// lambda as callback
function sumOfTwoNumbers(x, y, opertaion) {
    var result = operation(x, y);
    return result;
}
console.log(sumOfTwoNumbers(10, 20, function (x, y) { return x + y; })); //30
