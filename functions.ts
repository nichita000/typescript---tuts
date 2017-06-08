
function add (a: number, b: number): number { // this function MUST to return ONLY number !
    return a + b;
}

function sumOfNums (a: number, b: number): void { // this function won't return anything

    // Some functionality ...
}

function getFullName (firstname: string, lastname?: string): string { // '?' character means, the second argument is not required;
    let fullName = firstname;
    fullName += lastname ? lastname : '';

    return fullName;
}

function getSum (firstNumber: number, ...numberArray: number[] ): number {

    let result = firstNumber;

    numberArray.forEach((number) => {

        result += number;
    });

    return result;
}

let sumOfNumbers: number = getSum(1, 2, 3); // 6
let anotherSumOfNumbers: number = getSum(1, 2, 3, 4, 5, 6, 7); // 28

//function overload

function addOrConcatinate(x: string, y: string): string;
function addOrConcatinate(x: number, y: number): number;
function addOrConcatinate(x: any, y: any): any {
    return x + y;
}

let result1 = addOrConcatinate(10, 15); // 25
let result2 = addOrConcatinate('TypeScript', '= Power'); // 'TypeScript = Power'

function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(val: string|number): string {

    return typeof val === 'string'? 'Name - ' + val : 'Age : ' + val ;
}

// function type

let operation: (x: number, y: number) => number;
operation = function (x: number, y: number): number {
    return x + y;
};


// function type as callback

function mathOp (x: number, y: number, operation: (a: number, b: number) => number): number {

    let result = operation(x, y);
    return result;
}

let operationFunc: (x: number, y: number) => number;
operationFunc = function (a: number, b: number): number {
    return a + b;
}

console.log(mathOp(10, 20, operationFunc)); // 30


// lambda

let summ = (x: number, y: number) => x + y;

let newResult = summ(15, 35); // 50

let summm = (x: number, y: number) => {

    x *= 2;
    return x + y;
};

let anotherResult = summm(15, 35); // 65

// lambda as callback

function sumOfTwoNumbers (x: number, y: number, opertaion: (a: number, b: number) => number): number  {

    let result = operation(x, y);
    return result;
}

console.log(sumOfTwoNumbers(10, 20, (x, y) => x + y)); //30