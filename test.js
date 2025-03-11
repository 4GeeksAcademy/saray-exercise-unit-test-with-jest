const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(1)).toBe(1.07);
})

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    expect(fromDollarToYen(10)).toBe(1490.3);
})

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    expect(fromYenToPound(1000)).toBe(7.2);
})