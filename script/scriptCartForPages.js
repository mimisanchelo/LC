'use strict'

const AddCart = document.querySelectorAll('.modal__add')
const modalPopup = document.querySelector('.modal')
const btnCart = document.querySelector('.ri-shopping-cart-2-fill')
const cartContainer = document.querySelector('.container-cart')
const removeCartItem = document.querySelectorAll('.ri-delete-bin-2-line')
const notification = document.querySelector('.delivery__notification')
const clearCart = document.querySelector('.cart-clear')

/////////////////////////////////////////////////
AddCart.forEach(function (addTo) {
  addTo.addEventListener('click', function () {
    const modal = (addTo.closest('.modal').style.display = 'none')
    setTimeout(function () {
      notification.classList.remove('show__notification')
    }, 1500)
  })
})

btnCart.addEventListener('click', function () {
  cartContainer.classList.toggle('cart-active')
})

window.addEventListener('DOMContentLoaded', ready)

function ready() {
  // REMOVE ITEM ROW
  removeCartItem.forEach(function (btn) {
    btn.addEventListener('click', removeItem)
  })

  // change input number
  let quantityInput = document.querySelectorAll('.item-input')
  for (let i = 0; i < quantityInput.length; i++) {
    let quantity = quantityInput[i]
    quantity.addEventListener('change', quantityChange)
  }

  clearCart.addEventListener('click', clearCartClicked)
}

// FUNCTIONS
//
function itemsInCart() {
  const cartItem = document.querySelectorAll('.item-cart')
  const cartItself = document.querySelector('.cart__navbar')

  if (cartItem.length === 0) {
    cartItself.style.display = 'none'
    cartContainer.classList.remove('cart-active')
  } else {
    cartItself.style.display = 'block'
    document.querySelector('.cart__number-of-items').textContent =
      cartItem.length
  }
}
//
function clearCartClicked() {
  let cartItems = document.querySelector('.cart__items-box')
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

//
function removeItem(e) {
  let button = e.target
  button.parentElement.remove()
  updateCartTotal()
}
//
function quantityChange(e) {
  let input = e.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}
//
function updateCartTotal() {
  const cartRows = cartContainer.querySelectorAll('.item-cart')

  let total = 0

  for (let i = 0; i < cartRows.length; i++) {
    let row = cartRows[i]
    let priceElement = row.querySelector('.item-price')
    let quantityElement = row.querySelector('.item-input')

    let price = parseFloat(priceElement.innerText.replace('$', ''))
    let quantity = quantityElement.value
    total = total + price * quantity
  }
  total = Math.round(total * 100) / 100
  document.querySelector('.end-price-number').innerText = '$' + total + ' CAD'
}
