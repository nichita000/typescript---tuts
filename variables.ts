// let or const

let str: string = 'TypeScript';
let num: number = 65;
let bool: boolean = false;

// array

let arrayOfStrings: string[] = ['first', 'second', 'third'];
let anotherArrayOfStrings: Array<string> = ['fourth',  'fifth', 'sixth'];
let arrayOfNumbers: number[] = [12, 14, 19];
let anotherArrayOfNumbers: Array<number> = [11, 16, 20];
let preparedArray: [string, number] = ['string', 100]; // here we can put only string as first element and number as second !

// enum:

enum Season {Winter, Spring, Summer, Autumn};
let currentSeasonNum: Season = Season.Summer; // Season as type. will return as number
let currentSeasonStr: string = Season[2]; // return string by index

// any

let anyType: any = 'Hello TypeScript';
anyType = 5; // won't return error , because of any type !

// Null and Undefined

let a: null = null;
let b: undefined = undefined;

let willNull: number = 5;
willNull = undefined; // We can assign undefined for any type of variables !


// union

let names: string[] | string;

// variable type

type stringOrNumberType = number | string;
let sum: stringOrNumberType = 36.6;

// type assertion

let someAnyValue: any = "hello world"; // <== string
let strLength: number = (<string>someAnyValue).length;

        // OR

let someUnionValue: any = "hello world!";
strLength = (someUnionValue as string).length; // operation 'as'
