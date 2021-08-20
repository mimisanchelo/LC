'use strict'
const btnCart = document.querySelector('.ri-shopping-cart-2-fill')
const cartContainer = document.querySelector('.container-cart')
const removeCartItem = document.querySelectorAll('.ri-delete-bin-2-line')
const notification = document.querySelector('.delivery__notification')

btnCart.addEventListener('click', function () {
  cartContainer.classList.toggle('cart-active')
})

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

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

  // add to the cart
  let addToCartBtns = document.querySelectorAll('.modal__add')
  for (let i = 0; i < addToCartBtns.length; i++) {
    let button = addToCartBtns[i]
    button.addEventListener('click', addToCart)
  }

  let clearCart = document.querySelector('.cart-clear')
  clearCart.addEventListener('click', clearCartClicked)
  itemsInCart()
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
  itemsInCart()
}

//
function addToCart(e) {
  let button = e.target
  let shopItem = button.parentElement
  let shopItemSibling = shopItem.previousElementSibling

  let title = shopItem.querySelector('.modal__name').innerText
  let price = shopItem.querySelector('.modal__price').innerText
  let input = shopItem.querySelector('.modal__input').value
  let imgSrc = shopItemSibling.querySelector('img').src

  addItemToCart(title, price, imgSrc, input)
  updateCartTotal()
  itemsInCart()
}
//
function addItemToCart(title, price, imgSrc, input) {
  let cartRow = document.createElement('div')
  let cartItems = document.querySelector('.cart__items-box')

  let cartItemNames = cartItems.querySelectorAll('.item-name')
  notification.classList.add('show__notification')
  notification.innerHTML = `<i class="ri-check-line"></i>
      <h3>${title} added to the shopping cart</h3>`

  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      notification.classList.add('show__notification')
      notification.innerHTML = `<i class="ri-close-line"></i>
      <h3>${title} is already in the shopping cart</h3>`
      return
    } else {
      notification.classList.add('show__notification')
      notification.innerHTML = `<i class="ri-check-line"></i>
      <h3>${title} added to the shopping cart</h3>`
    }
  }

  let cartRowContent = `<div class="item-cart">
    <img src="${imgSrc}" alt="">
    <div class="item-info">
      <p class="item-name">${title}</p>
      <input class="item-input" type="number" id="item-input" max="100" value="${input}">
      <p class="item-price">${price}</p>
    </div>
    <i class="ri-delete-bin-2-line"></i>
  </div>`

  cartRow.innerHTML = cartRowContent
  cartItems.append(cartRow)
  cartRow
    .querySelector('.ri-delete-bin-2-line')
    .addEventListener('click', removeItem)
  cartRow
    .querySelector('.item-input')
    .addEventListener('change', quantityChange)
}

//
function removeItem(e) {
  let button = e.target
  button.parentElement.remove()
  updateCartTotal()
  itemsInCart()
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
