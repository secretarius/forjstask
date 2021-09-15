function getTotal({total, shipment = 0.1}) {
    return total + total * shipment;
}

const total = getTotal({total: 1000, shipment: 0.2});
console.log(total);


function getTotalWithDefault({total = 1000, shipment = 0.1} = {}) {
    return total + total * shipment;
}

const total2 = getTotalWithDefault();
console.log(total2);

///////////////////////////////////////
function currentCurrency(v) {
    const complete = {
        EUR: v * 31.50,
        USD: v * 26.64,
        GBP: v * 36.83
    }
    return complete;
}

const amount = currentCurrency(100);
console.log(amount);
console.log(amount.EUR);
console.log(amount.USD);

const {EUR, GBP, USD} = currentCurrency(100);
console.log(EUR, GBP, USD);
