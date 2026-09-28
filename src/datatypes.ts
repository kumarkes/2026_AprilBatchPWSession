

//data types:

//1. primitive data types:
let name: string = 'Tom';
let empName = 'Naveen';
console.log(typeof empName);

let age: number = 30;
console.log(age);

let isActive: boolean = true;
console.log(isActive);

let noValue: null = null;
console.log(noValue);
console.log(typeof noValue);

let notSet: undefined = undefined;
console.log(notSet);
console.log(typeof undefined);

let username: string;
username = 'naveenautomation';
console.log(username);

let bigNum: bigint = 909098989899999n;
console.log(bigNum);

let data: any = 'hello world';
console.log(data, typeof data);
console.log(data.toUpperCase());

data = 300;
console.log(data, typeof data);

let value: unknown = 'hello';
console.log(value, typeof value);
//console.log(value.toUpperCase()); //CT error

if (typeof value === 'string') { //type check
    console.log(value.toUpperCase());
}

//void: return type of function: does not return any value.
function clickOnElement(element: string): void {
    console.log('click on :', element);
}

clickOnElement('loginButton');

//never: function never returns (throws the error or infinite loop)
// function throwSomeError(messg: string): never {
//     throw new Error(messg);
// }

// throwSomeError('element not found...');

// function pageLoading(): never {
//     while (true) {
//         console.log('hello word');
//     }

// }

// pageLoading();
// console.log('bye');

//Array: dynamic 
let score: number[] = [100, 20, 40];
console.log(score);

let browsers: string[] = ['chrome', 'firefox', 'edge'];
console.log(browsers.length);

let empIds: (string | number)[] = ['rest101', 100];

let names: string[] = ['tom', 'shilpa', 'manish'];
let empNames: Array<string | number> = ['tom', 'shilpa', 'manish', 101];

console.log(typeof score);

//tuple: static array: fixed length, fixed type per position:
let user: [string, number, boolean] = ['Peter', 30, true];
console.log(user);

//objects:
let userObj: { name: string | number, age: number, salary: number, active: boolean } =
{
    age: 35,
    salary: 12.33,
    active: true,
    name: 'shilpa'

}

console.log(userObj);

//enums: collection of constant values:

enum Status {
    Open, //0
    ReOpen, //1
    New, //2
    Closed,//3
    Assigned,//4
    Fixed//5
}

console.log(Status);
console.log(Status.Open);//0
console.log(Status.Fixed);//5

enum Browsers {
    ch = "chrome",
    ff = "firefox",
    eg = "edge",
    sf = "safari"
}

console.log(Browsers);
console.log(Browsers.ch);
console.log(Browsers);

enum Roles {
    Admin = "Admin",
    Tester = "Tester",
    Dev = "Developer"
}

console.log(Roles.Admin);

//union type:
let userID: string | number = 'test101';
userID = 1000;

//Literal Types: exact values only
let httpStatusCode: 200 | 400 | 500;

httpStatusCode = 200;
console.log(httpStatusCode);

let direction: "left" | "right" | "up" | "down";

//functions:
function getNumber(): number {
    return 100;
}

function getTrainerName(): string | number {
    return 'Tom';
}

function getNumbers(): (string | number)[] {
    return [100, 200, 300];
}


//arrow:
let addNum = (x: number, y: number): number => x + y;
let r1 = addNum(100, 200);
console.log(r1);

//promises:
function getUserData(): Promise<number | string> {
    return new Promise((resolve, reject) => {
        let flag: boolean = true;
        if (flag) {
            resolve(100);
        }
        else {
            reject('400 error');
        }
    });
}

let res = await getUserData();
console.log(res);
