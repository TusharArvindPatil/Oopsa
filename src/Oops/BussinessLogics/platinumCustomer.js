import salesAbstraction from "../Abstractions/salesAbstraction";

export default class platinumCustomer extends salesAbstraction {

    //@Override
    async discountCalculation(salesModel) {
        try {
            return await new Promise((resolve) => {

                let result =
                    salesModel
                        .amount * 30 / 100;

                salesModel.discountAmount = result;

                return resolve(salesModel);

            });
        }
        catch (ex) {
            throw ex;
        }
    }
}