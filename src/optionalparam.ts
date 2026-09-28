

//optional param:
//not mandatory to pass the value for the optonal param
//optional param should be written at the last after the required params
//it should be written with ?

function getBilling(foodBill: number, tax?: number, vat: number=90): void {

    if (tax && vat) {
        console.log(foodBill + tax + vat);
    }
    else if (tax) {
        console.log(foodBill + tax);
    }
    else {
        console.log(foodBill);
    }

}

getBilling(1000, 20, 5);
getBilling(1000, 500);
getBilling(1000);
getBilling(100, 0, 5);

//can we have optional param with default value?

function calcPrice(amount: number, discount: number = 0, vat: number = 50): number {
    return amount - (amount * discount) / 100 + vat;
}

console.log(calcPrice(100, 5));

