let itemQty = document.getElementsByClassName("item-qty");
let subtractBtn = document.getElementsByClassName("subtract-btn");
let addBtn = document.getElementsByClassName("add-btn");
let cartTotal = document.getElementById("cart-total");

for (let i = 0; i < itemQty.length; i++) {
  Number(itemQty[i].innerText);
  subtractBtn[i].addEventListener("click", () => {
    if (itemQty[i].innerText > 0) {
      itemQty[i].innerText--
      cartTotal.innerText--;
    }
  });
  addBtn[i].addEventListener("click", () => {
    itemQty[i].innerText++
    cartTotal.innerText++;
  });
}