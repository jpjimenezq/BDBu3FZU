const paypal = require('@paypal/checkout-server-sdk');

const clientID = "AYFlhL6AJ-XFXJ38nKfhw0Oeqok4y_-CdhpQihpI6ar5KsEW4bz2CCVhktKyAaBInOdiECSKNzCYO-gp";
const clientSecret = "ELvNJgjDvZ47ZXFsBtnWgnyMgZfgfn3X3vl5pSAPHwlly9daNFcLhybBxSOimuX_NxjpUTHouM53SHLr";

const environment = new paypal.core.SandboxEnvironment(clientID, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

async function POST() {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [{
            amount: {
                currency_code: "USD",
                value: "9.99"
            },
            description: "Connecta CRM - Personal Plan"
        }]
    });

    const response = await client.execute(request);
    console.log(response);

    return {
        id: response.result.id
    };
}

// Exporta la función POST usando CommonJS
module.exports = { POST };
