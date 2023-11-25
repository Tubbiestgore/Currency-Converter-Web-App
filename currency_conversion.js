document.getElementById("convertButton").addEventListener("click", () => {
    const currentCurrency = document.getElementById("currentCurrency").value;
    const amountMoney = parseFloat(document.getElementById("amountMoney").value);
    const currencyVar = document.getElementById("currencyVar").value;
    const resultDisplay = document.getElementById("resultDisplay");

    const apiCall = 'https://v6.exchangerate-api.com/v6/f96a6a3d1eb21ed57bb74fc5/latest/USD';

    fetch(apiCall)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                resultDisplay.textContent = 'An error occurred while fetching exchange rates';
            } else {
                const rates = data.conversion_rates;
                const usdToCurrent = rates[currentCurrency];
                const usdToTarget = rates[currencyVar];

                if (usdToCurrent && usdToTarget) {
                    const result = (amountMoney / usdToCurrent) * usdToTarget;
                    const formattedResult = `${amountMoney} ${currentCurrency} is approximately ${result.toFixed(2)} ${currencyVar}`;
                    sessionStorage.setItem('conversionResult', formattedResult);
                    window.location.href = 'currency_result.html';
                } else {
                    resultDisplay.textContent = 'Invalid currency codes entered';
                }
            }
        })
        .catch((error) => {
            console.error(error);
            resultDisplay.textContent = 'An error occurred during conversion';
        });
});