const currencyList = document.getElementsByClassName("currency-quotes");
let fromCurrency = document.getElementById("from-currency");
let toCurrency = document.getElementById("to-currency");
const saveCurrency = document.getElementById("save-currency");
let output = document.getElementsByClassName("output")[0];
let date = document.getElementsByClassName("date")[0];
let time = document.getElementsByClassName("time")[0];
let convertCurrency = document.getElementsByClassName("convert-currency")[0];
let convertAmount = document.getElementsByClassName("convert-amount")[0];
let delButton = document.getElementsByClassName("del-button");

let fetchData = [];

// fetchting data from api
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "550b11f63dmsh34638acb979a171p1e085cjsn7ac8b40871fa",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
};

fetch("https://currency-exchange.p.rapidapi.com/listquotes", options)
  .then((response) => response.json())
  .then((response) => {
    response.map((data) => {
      fetchData.push(data);
    });
    fromList(fetchData);
    toList(fetchData);
  })
  .then()
  .catch((err) => console.error(err));

// populate to from dropdown
function fromList(x) {
  x.map((data) => {
    let option = document.createElement("option");
    option.value = data;
    option.innerHTML = data;
    fromCurrency.appendChild(option);
  });
}

// populate to to dropdown
function toList(x) {
  x.map((data) => {
    let option = document.createElement("option");
    option.value = data;
    option.innerHTML = data;
    toCurrency.appendChild(option);
  });
}

//getting the conversion of 2 currency
function convert() {
  let quantity = document.getElementById("quantity").value;
  let fromCurrency = document.getElementById("from-currency").value;
  let toCurrency = document.getElementById("to-currency").value;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "550b11f63dmsh34638acb979a171p1e085cjsn7ac8b40871fa",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  fetch(
    `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let amount = (quantity * response).toFixed(2);
      // let amount = Math.round(quantity * response * 100) / 100;
      if (amount == 0) {
        convertCurrency.textContent = "";
        convertAmount.textContent = "Unable to convert!";
      } else {
        convertCurrency.textContent = toCurrency;
        convertAmount.textContent = amount;
      }
    })
    .catch((err) => console.error(err));

  fetch(`http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur`)
    .then((response) => response.json())
    .then((response) => {
      date.textContent = response.datetime.slice(0, 10);
      time.textContent = response.datetime.slice(11, 16);
    })
    .catch((err) => console.error(err));
}

// save the currency
function save() {
  saveCurrency.appendChild(output.cloneNode(true));
  delButton[delButton.length - 1].style.display = "block";
}

function remove(e) {
  e.parentElement.remove();
}
