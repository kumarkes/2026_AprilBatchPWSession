

//contract/schema for the user
type userType = {
    name: string,
    age: number,
    salary?: number,
    isActive: boolean,
    role?: string,
};


let user: userType = {
    name: 'Tom',
    age: 30,
    salary: 40,
    isActive: true,
    role: 'admin',
}

let myUser: userType = {
    name: 'peter',
    age: 34,
    salary: 43,
    isActive: false,
    role: 'customer'
}

let newUser: userType = {
    name: 'Ravi',
    age: 30,
    isActive: true,
    salary: 10
}

console.log(user);
console.log(typeof user);
console.log(myUser);

//interface: used to create/define the schema:

interface userSchema {
    name: string,
    age?: number,
    isActive?: boolean,
}

let u1: userSchema = {
    name: 'Naveen',
    age: 20,
    isActive: true
}


//

interface Comp {
    compName: string
}

interface Employee {
    name: string,
    age: number,
    salary: number
}

interface Dept extends Employee, Comp {
    deptName: string,
    head?: string
}

let emp: Dept = {
    name: 'tom',
    age: 30,
    salary: 12.33,
    deptName: 'HR',
    head: 'Peter',
    compName: 'IBM'
}

//
interface Car {
    brand: string
}

interface Car {
    model: string
}

let myCar: Car = {
    brand: 'BMW',
    model: 'x5'
}

console.log(myCar.brand, myCar.model);

//

type Person = {
    name: string
};

type Company = Person & {
    company: string,
    count: number
}

let myEmp: Company = {
    name: 'Tom',
    company: 'google',
    count: 100
}

//

type Status = "Pending" | "Out of delivery" | "Delivered";
let orderStatus: Status = "Pending";

//type with primitive data:
type userID = string | number;
type Age = number;

let id: userID = 'pop001';
let id1: userID = 9001;
let age: Age = 20;

//type with tuples:
type Point = [number, number, string];
let p: Point = [10.33, 43.44, 'LA'];

//Real time example: in test automation:

//interface for the test config
interface TestConfig {
    testName: string,
    browser: "chrome" | "firefox" | "webkit",
    headless: boolean,
    retries?: number
}

//type for the status:
type TestStatus = "passed" | "failed" | "skipped";

//interface for the Test Result:
interface TestResult extends TestConfig {
    status: TestStatus,
    duration: number
}

let result: TestResult = {
    status: "passed",
    duration: 10,
    testName: "Login Test",
    browser: "chrome",
    headless: false,
    retries: 3
}

console.log(result);
let resultJson = JSON.stringify(result, null, 2);
console.log(resultJson);

//JS --> JSON --> insert SQL ---> DB(schema)
//Java (POJO classes) --> JSON 



interface Browser {
    browserName: string,
    version: number,
    coding(langName: string): void,
    add: (a: number, b: number) => number;
}

let chrome: Browser = {
    browserName: 'chrome',
    version: 134,
    coding(langName: string) {
        console.log(`${this.browserName} working with ${langName}...`);
    },
    add: function (a: number, b: number): number {
        return a + b;
    }
}

chrome.coding('Javascript');


 