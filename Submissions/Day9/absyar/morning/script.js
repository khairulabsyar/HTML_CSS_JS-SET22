const shoppingCart = document.getElementById("shopping-cart");
const shoppingList = document.getElementsByClassName("shopping-list");
const price = document.getElementsByClassName("price");
const quantity = document.getElementsByClassName("quantity");
const totalPrice = document.getElementsByClassName("total-price");
const overallPrice = document.getElementById("overall-price");

let priceValue = 0;
let noOfQuantity = 0;

function calculate() {
  let x = 0;
  while (x < shoppingList.length) {
    if (Number(price[x].value)) {
      priceValue = parseInt(price[x].value);
    }
    if (Number(quantity[x].value)) {
      noOfQuantity = parseInt(quantity[x].value);
    }
    if ((priceValue == "") | (noOfQuantity == "")) {
      totalPrice[x].innerHTML = 0;
    } else if (priceValue != 0 && noOfQuantity != 0) {
      let outputPrice = priceValue * noOfQuantity;
      totalPrice[x].innerHTML = outputPrice;
      priceValue = 0;
      noOfQuantity = 0;
    }
    x++;
  }
}
function newShoppingList() {
  shoppingCart.appendChild(shoppingList[0].cloneNode(true));

  price[price.length - 1].value = "";
  quantity[quantity.length - 1].value = "";
  totalPrice[totalPrice.length - 1].innerHTML = 0;

  let finalPrice = 0;
  let i = 0;
  while (i < totalPrice.length) {
    finalPrice += parseInt(totalPrice[i].innerHTML);
    i++;
  }
  overallPrice.innerHTML = finalPrice;
}
