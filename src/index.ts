
let x: number = 10;

let name: string = 'naveen';

let status: boolean = true;

console.log(typeof name);
console.log(typeof status);


//name: addition
//params: 2 (x: number, y: number)
//return type: number

function addition(x: number, y: number): number {
    return x + y;
}

console.log(addition(100, 200));


function getTrainerName(): string {
    return 'Naveen';
}

getTrainerName();

function printData(): void {
    console.log('print user data');
}

printData();

function getNumbers(): number[] {
    return [10, 20, 30];
}

let sub = (a: number, b: number): number => a - b;

let t1: number = sub(100, 50);
console.log(t1);