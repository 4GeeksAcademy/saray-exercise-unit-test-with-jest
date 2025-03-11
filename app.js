const fromDollarToYen = (dollarAmount) => {
    const yenAmount = dollarAmount * (149.03); // 1 USD = 149.03 JPY
    return yenAmount;
};

const fromEuroToDollar = (euroAmount) => {
    const dollarAmount = euroAmount * 1.07; // 1 EUR = 1.07 USD
    return dollarAmount;
};

const fromYenToPound = (yenAmount) => {
    const poundAmount = yenAmount * 0.0072; // 1 JPY = 0.0072 GBP
    return poundAmount;
};

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };