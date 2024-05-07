const CalculatorControllerService = require('../service/CalculatorControllerService')

describe('Test Service', () => {
    it('Should return 11', async () => {
        const mReq = { headers: { "x-request-operation": "+" } }
        const mBody = { firstValue: 5, secondValue: 6 }
        const res = await CalculatorControllerService.execute(mBody, mReq["headers"]["x-request-operation"])
        expect(res).toBe(11);
    });

    it('Should return 0', async () => {
        const mReq = { headers: { "x-request-operation": "-" } }
        const mBody = { firstValue: 5, secondValue: 5 }
        const res = await CalculatorControllerService.execute(mBody, mReq["headers"]["x-request-operation"])
        expect(res).toBe(0);
    });

    it('Should return 56', async () => {
        const mReq = { headers: { "x-request-operation": "*" } }
        const mBody = { firstValue: 7, secondValue: 8 }
        const res = await CalculatorControllerService.execute(mBody, mReq["headers"]["x-request-operation"])
        expect(res).toBe(56);
    });

    it('Should return 4', async () => {
        const mReq = { headers: { "x-request-operation": "/" } }
        const mBody = { firstValue: 12, secondValue: 3 }
        const res = await CalculatorControllerService.execute(mBody, mReq["headers"]["x-request-operation"])
        expect(res).toBe(4);
    });
})
