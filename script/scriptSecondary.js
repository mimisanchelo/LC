'use strict'

// navbar
const navList = document.querySelector('.nav__list--sub')
const navbarContainer = document.querySelector('.navbar__container--sub')
const navLinks = document.querySelectorAll('.nav__link--sub')
const overlay = document.querySelector('.nav__overlay--sub')
// OVERLAY

// BTNS
const btnNavListOpen = document.querySelector('.nav__toggle--sub')
const btnNavListClose = document.querySelector('.nav--close')
/////////////////////////// FUNCTIONS HEADER

const openNav = function () {
  navList.classList.add('show__nav--sub')
  navbarContainer.classList.add('nav__overlay--sub')

  navLinks.forEach(function (link, i) {
    if (window.innerWidth > 950) {
      return
    } else {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `linkFadeIn 0.4s ease forwards ${i / 12 + 0.2}s`
      }
    }
  })
}
const closeNav = function () {
  navList.classList.remove('show__nav--sub')
  navbarContainer.classList.remove('nav__overlay--sub')

  navLinks.forEach(function (link, i) {
    if (window.innerWidth > 950) {
      return
    } else {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `linkFadeIn 0.4s ease forwards ${i / 12 + 0.2}s`
      }
    }
  })
}

//////////////////////////////// NAVBAR MOBILE
btnNavListOpen.addEventListener('click', openNav)
btnNavListClose.addEventListener('click', closeNav)

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    closeNav()
  })
})
