export default class salesAbstraction {

    //@Virtual Method
    dummy() {
        console.log("Abstraction: Complete Method");
    }


    //@Virtual Method
    async discountCalculation(salesModel) {
        throw new Error("Discount Calculation must implement on Child Class");
    }

}