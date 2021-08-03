'use strict'

// ///////VARIABLES
// navbar
const navlist = document.querySelector('.nav__list')
const btnNavListOpen = document.querySelector('.nav__toggle')
const btnNavListClose = document.querySelector('.nav--close')
const navbarContainer = document.querySelector('.navbar__container')
const navItems = document.querySelectorAll('.nav__items')

// tabmenu

const tabsContainer = document.querySelector('.operation__tab-container')
const tabs = document.querySelectorAll('.operation__tab')
const tabsContent = document.querySelectorAll('.operation__field')

/////////////////////////// PRELOAD

window.addEventListener('load', function () {
  document.body.classList.remove('preload')
})

/////////////////////////// FUNCTIONS HEADER

const openNav = function () {
  navlist.classList.add('nav--open')
  navbarContainer.classList.add('nav__overlay')
}
const closeNav = function () {
  navlist.classList.remove('nav--open')
  navbarContainer.classList.remove('nav__overlay')
}

//////////////////////////////// NAVBAR MOBILE
btnNavListOpen.addEventListener('click', openNav)
btnNavListClose.addEventListener('click', closeNav)

navItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    closeNav()
  })
})

// TAB MENU

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operation__tab')

  console.log(clicked)
  // GUARD CLAUSE
  if (!clicked) return
  // remove active
  tabs.forEach(function (t) {
    t.classList.remove('operation__tab--active')
  })
  tabsContent.forEach(function (c) {
    c.classList.remove('operation__field--active')
  })
  // activate tab
  clicked.classList.add('operation__tab--active')

  // active content
  document
    .querySelector(`.operation__field--${clicked.dataset.tab}`)
    .classList.add('operation__field--active')
})

// CCOOKIE MESSAGE

const cookieContainer = document.querySelector('.cookie__message')
const cookieBtn = document.querySelector('.cookie__btn--open')
const cookieClose = document.querySelector('.cookie__btn--close')

cookieBtn.addEventListener('click', () => {
  cookieContainer.classList.remove('active')
  localStorage.setItem('cookieBannerDisplayed', 'true')
})
cookieClose.addEventListener('click', function () {
  cookieContainer.remove()
})

setTimeout(() => {
  if (!localStorage.getItem('cookieBannerDisplayed')) {
    cookieContainer.classList.add('active')
  }
}, 2000)

// PROMO

const promoClose = document.querySelector('.promo--close')
const promotionContainer = document.querySelector('.promotion')
const promotionOverlay = document.querySelector('.promotion__overlay')
promoClose.addEventListener('click', function () {
  promotionContainer.remove()
  promotionOverlay.classList.add('hidden')
})

setTimeout(function () {
  promotionContainer.classList.remove('hidden')
  promotionOverlay.classList.remove('hidden')
}, 6000)
