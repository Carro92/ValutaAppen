async function fetchTopCurrencies() {
    const response = await fetch('https://<din-function-app-url>/api/GetTopCurrencies');
    const data = await response.json();
    displayCurrencies(data);
}

function displayCurrencies(currencies) {
    const currencyListElement = document.getElementById('currency-list');
    currencyListElement.innerHTML = currencies.map(currency => `<p>${currency.name}: ${currency.value}</p>`).join('');
}

// Valutakonvertering
document.getElementById('conversion-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const response = await fetch(`https://api.exempel.com/convert?amount=${amount}&from=${fromCurrency}&to=${toCurrency}&apikey=DIN_API_NYCKEL`);
    const result = await response.json();
    document.getElementById('conversion-result').innerText = `Resultat: ${result.convertedAmount} ${toCurrency}`;
});

// Initiera appen
fetchTopCurrencies();