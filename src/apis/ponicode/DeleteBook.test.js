const DeleteBook = require("../DeleteBook")
// @ponicode
describe("DeleteBook.default", () => {
    test("0", async () => {
        let result = await DeleteBook.default("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        expect(result).toBe(true)
    })
})
