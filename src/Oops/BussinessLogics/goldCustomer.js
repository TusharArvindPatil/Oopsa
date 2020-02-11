import salesAbstraction from "../Abstractions/salesAbstraction";

export default class goldCustomer extends salesAbstraction {

    //@Override
    async discountCalculation(salesModel) {
        try {
            return await new Promise((resolve) => {

                let result =
                    salesModel
                        .amount * 20 / 100;

                salesModel.discountAmount = result;

                return resolve(salesModel);

            });
        }
        catch (ex) {
            throw ex;
        }
    }
}