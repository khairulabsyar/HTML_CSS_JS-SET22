console.log("JavaScript file started");

let fromCurrencySelector = document.querySelector("#fromCurrency");
let toCurrencySelector = document.querySelector("#toCurrency");
let currencyAmount = document.querySelector("#currencyAmount");
let selectedFromCurrency = document.querySelector("#fromCurrency");
let selectedToCurrency = document.querySelector("#toCurrency");
let convertedAmount = document.querySelector("#convertedAmount");
let saveBtn = document.querySelector("#saveBtn");
let convertBtn = document.querySelector("#convertBtn");
let userList = document.querySelector("#userList");

// functions
function listDropdownFromApi(array, parentDOM, defaultValue) {
  array.map((item) => {
    let fromCurrencyOptions = document.createElement("option");
    fromCurrencyOptions.setAttribute("value", item);
    fromCurrencyOptions.innerText = item;
    if (item === defaultValue) {
      fromCurrencyOptions.setAttribute("selected", "selected");
    }
    parentDOM.appendChild(fromCurrencyOptions);
  });
}
function roundTwoDecimals(num) {
  return parseFloat(num).toFixed(2);
}

// get list current api call
const optionsListQuotes = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b582a52f63msh925882600df5f95p159f80jsnac41cc0a0cd9",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
};

fetch("https://currency-exchange.p.rapidapi.com/listquotes", optionsListQuotes)
  .then((data) => data.json())
  .then((data) => {
    listDropdownFromApi(data, fromCurrencySelector, "MYR");
    listDropdownFromApi(data, toCurrencySelector, "USD");
  })
  .catch((err) => console.error(err));

// event listener function
currencyAmount.addEventListener("input", (e) => {
  if (currencyAmount.value !== "") {
    convertBtn.removeAttribute("disabled");
  } else {
    convertBtn.setAttribute("disabled", true);
  }
});

// convert function
function convertExchange() {
  // get exchange amount
  const optionsExchange = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b582a52f63msh925882600df5f95p159f80jsnac41cc0a0cd9",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  fetch(
    `https://currency-exchange.p.rapidapi.com/exchange?from=${selectedFromCurrency.value}&to=${selectedToCurrency.value}&q=1.0`,
    optionsExchange
  )
    .then((response) => response.json())
    .then((response) => {
      convertedAmount.innerText = `${
        selectedToCurrency.value
      } ${roundTwoDecimals(response * currencyAmount.value)}`;
      if (convertedAmount.innerHTML !== "0.00") {
        saveBtn.removeAttribute("disabled");
      }
    })
    .catch((err) => console.error(err));
}

// get from localstorage
let savedList = localStorage.getItem("savedList")
  ? localStorage.getItem("savedList").split(",")
  : [];

// render saved items
if (savedList.length !== 0) {
  savedList?.map((item) => {
    let newList = document.createElement("li");
    newList.classList.add("text-xl", "text-gray-500", "py-2");
    newList.innerText = item;
    userList.appendChild(newList);
  });
}
// add list function
function saveList() {
  // saved to localstorage
  savedList.push(convertedAmount.innerText);
  localStorage.setItem("savedList", savedList.toString());
  // append child
  let newList = document.createElement("li");
  newList.classList.add("text-xl", "text-gray-500", "py-2");
  newList.innerText = convertedAmount.innerText;
  userList.appendChild(newList);
}

// delete list
function deleteList() {
  localStorage.removeItem("savedList");
  userList.innerHTML = "";
}
