// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the button element by its ID
    const convertButton = document.getElementById("convert-button");

    // Add event listener to the button
    convertButton.addEventListener("click", convert);
});

function convert() {
    const amount = document.getElementById("amount");
    const currency = document.getElementById("currency");
    const result = document.getElementById("result");
  
    const apiKEY = "1TT/ApboJBjm/zZjcbyBzg==wZp9bQJbEPbrVjXo";
    const apiURL = "https://api.api-ninjas.com/v1/exchangerate?pair=EUR_";
  
    console.log(apiURL, "apiURL");
    
    console.log("Button clicked");
    const amountValue = amount.value;
    console.log(amountValue, "amountValue");
    const currencyTotal = currency.value;
    console.log(currencyTotal, "currencyTotal");
    const url = apiURL + currencyTotal;
    console.log(url, "url");
  
    fetch(url, {
      headers: {
        "X-API-KEY": apiKEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const rate = data.exchange_rate;
        console.log(rate, "rate");
        const resultPrice = amountValue * rate;
        console.log(resultPrice, "resultPrice");
        result.innerHTML = `${amountValue} ${currencyTotal} = ${resultPrice.toFixed(2)} EURO`;
      })
      .catch((error) => {
        console.log("Request failed: ", error);
        result.innerHTML = "Something went wrong, please try again.";
      });
  }
  