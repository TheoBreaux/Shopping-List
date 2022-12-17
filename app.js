// select addButton Icon
const addButtons = document.querySelectorAll('.add');
// select subtract button icon
const subButtons = document.querySelectorAll('.remove');

//  select span
let totalQty = document.querySelector('.total-quantity');

// select the span value
let totalQuantity = parseInt(totalQty.innerText);

// loop through and add event listener to all button icons
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener('click', function () {
    totalQty.innerText = totalQuantity++;
  })
}

// loop through and add event listener to subtract button icons
for (let i = 0; i < subButtons.length; i++) {
  subButtons[i].addEventListener('click', function () {
    if (totalQuantity > 0) {
      totalQuantity--;
      totalQty.innerText = totalQuantity;
    }
  })
}
