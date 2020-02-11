import customerContext from "../BussinessLogics/customerContext"
import salesModel from "../Models/salesModel";
import customerModel from "../Models/customerModel";

const getSalesUiData = Symbol("getSalesUiData");
const _salesModelObj = Symbol("_salesModelObj");

export default class salesController {

    // Constructor
    constructor(salesModel = null) {
        this[_salesModelObj] = salesModel;
    }

    // Private Method
    async [getSalesUiData]() {
        try {
            return await new Promise((resolve) => {

                this[_salesModelObj].customer.customerType = "gold";
                this[_salesModelObj].amount = 1000;

                return resolve(true);

            });

        }
        catch (ex) {
            throw ex;
        }
    }

    // Public Method
    async onSubmit() {
        try {
            return await new Promise(async (resolve) => {

                await this[getSalesUiData]();

                let data = await customerContext.discountCalculation(this[_salesModelObj]);

                return resolve(data);
            });
        }
        catch (ex) {
            throw ex;
        }
    }


}


export function onSubmitButtonClickEvent() {
    let salesModelObj = null
    let customerObj = null;
    let salesControllerObj = null;
    try {

        customerObj = new customerModel();

        salesModelObj = new salesModel();
        salesModelObj.customer = customerObj;



        salesControllerObj = new salesController(salesModelObj);

        salesControllerObj
            .onSubmit()
            .then((resolve) => console.log(resolve.discountAmount));
    }
    catch (ex) {
        console.log(ex.message);
        console.log(ex.stack);
    }

}