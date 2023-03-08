const currencyExchangeRates = {
    "EGP": 1,
    "RUB": 2.3
  };
  
  
  const exchangeForm = document.querySelector("#exchange-form");
  const amountInput = document.querySelector("#amount");
  const fromCurrencySelect = document.querySelector("#from-currency");
  const toCurrencySelect = document.querySelector("#to-currency");
  const resultDiv = document.querySelector("#result");
  const currencyChart = document.querySelector("#currency-chart");
  
  // Handle form submission
  exchangeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const exchangeRate = currencyExchangeRates[toCurrency] / currencyExchangeRates[fromCurrency];
    const result = amountInput.value * exchangeRate;
    resultDiv.innerHTML = `${amountInput.value} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
  });
  
  // Initialize chart
  const chartLabels = Object.keys(currencyExchangeRates);
  const chartData = Object.values(currencyExchangeRates);
  const currencyChartConfig = {
    type: "bar",
    data: {
      labels: chartLabels,
      datasets: [{
        label: "Currency Exchange Rates",
        data: chartData,
        backgroundColor: ["#007bff", "#28a745", "#ffc107"],
        borderColor: ["#007bff", "#28a745", "#ffc107"],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  const myChart = new Chart(currencyChart, currencyChartConfig);
  