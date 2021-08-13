'use strict'
const modalItems = document.querySelectorAll('.delivery__choice')
const modalClose = document.querySelectorAll('.ri-close-line')
const AddCart = document.querySelector('.modal__add')
const modalPopup = document.querySelector('.modal')

/////////////////////////////////////////////////
modalItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = item.getAttribute('data-modal')

    document.getElementById(modal).style.display = 'flex'
  })
})

modalClose.forEach(function (close) {
  close.addEventListener('click', function () {
    const modal = (close.closest('.modal').style.display = 'none')
  })
})

window.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none'
  }
})
