const missingNumber = require('./index.js');

test("", () => {
    const result = missingNumber([1,2,3,4,5,6,8]);

    expect(result).toEqual(7)
});

test("", () => {
    const result = missingNumber([1,2,3,4,5,6,7,8,10]);

    expect(result).toEqual(9)
});