import salesAbstraction from "../Abstractions/salesAbstraction";

export default class silverCustomer extends salesAbstraction {

    //@Override
    async discountCalculation(salesModel) {
        try {
            return await new Promise((resolve) => {

                // Call Dummy Method Using Super KeyWord
                super.dummy();

                let result =
                    salesModel
                        .amount * 10 / 100;

                salesModel.discountAmount = result;

                return resolve(salesModel);

            });
        }
        catch (ex) {
            throw ex;
        }
    }
}