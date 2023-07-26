const {firstName} = require("./validations");
const {verifyStockAvailability} = require("./validations");
/*const {cepInfo} = require("./cep");


test('validar cep irregular',()=>{
    const cepIrregular = "1234567";
    expect(cepInfo(cepIrregular)).toBe(true);
});

test("validar nome", ()=>{
    const fullName = "John Doe Etc";
    const result = firstName(fullName)
    expect(result).toBe("John");
});*/
describe("verificarEstoque()",()=>{
    it("verificar se a quantidade esta disponivel no estoque",()=>{
        const productType = "laptop";
        const qty = 5;
        const result = verifyStockAvailability(productType,qty);
        expect(result).toBe(true);
    });
})