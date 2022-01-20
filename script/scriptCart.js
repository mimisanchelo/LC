'use strict'

const btnRemoveItem = document.getElementsByClassName('btn__remove')
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  for (let i = 0; i < btnRemoveItem.length; i++) {
    let btn = btnRemoveItem[i]
    btn.addEventListener('click', removeCartItem)
  }
  const quantityInput = document.getElementsByClassName('cart__total-quantity')
  for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i]
    input.addEventListener('change', quantityChange)
  }
}

// INPUT
function quantityChange(e) {
  let input = e.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 0
  }
  updateCardTotal()
}

// REMOVE ITEM
function removeCartItem(e) {
  let btnClicked = e.target
  btnClicked.parentElement.parentElement.parentElement.remove()
  updateCardTotal()
}

// UPDATE TOTAL

function updateCardTotal() {
  let cardBox = document.getElementsByClassName('cart__box')[0]
  let chosenProducts = cardBox.getElementsByClassName('cart__chosen-product')

  let total = 0

  for (let i = 0; i < chosenProducts.length; i++) {
    let chosenProduct = chosenProducts[i]
    let priceElement =
      chosenProduct.getElementsByClassName('chosen__price-item')[0]
    let quantityElement = chosenProduct.getElementsByClassName(
      'cart__total-quantity'
    )[0]
    let price = parseFloat(priceElement.innerText.replace('$', ''))
    let quantity = quantityElement.value
    total = total + price * quantity
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('final-price')[0].innerText = '$' + total
}
