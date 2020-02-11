import salesAbstraction from "../Abstractions/salesAbstraction";
import silverCustomer from "../BussinessLogics/silverCustomer";
import goldCustomer from "../BussinessLogics/goldCustomer";
import platinumCustomer from "../BussinessLogics/platinumCustomer";


export default class customerContext {

    static async discountCalculation(salesModel) {
        let salesAbstractionObj = null;

        try {

            return await new Promise(async (resolve) => {

                salesAbstractionObj = new salesAbstraction();

                if (salesModel.customer.customerType === "silver") {
                    salesAbstractionObj = new silverCustomer();
                }
                else if (salesModel.customer.customerType === "gold") {
                    salesAbstractionObj = new goldCustomer();
                }
                else if (salesModel.customer.customerType === "platinum") {
                    salesAbstractionObj = new platinumCustomer();
                }

                // Discount Calculation
                salesModel = await salesAbstractionObj.discountCalculation(salesModel);

                return resolve(salesModel);
            });

        }
        catch (ex) {
            throw ex;
        }

    }

}