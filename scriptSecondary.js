'use strict'

// navbar
const navlist = document.querySelector('.nav__list')
const btnNavListOpen = document.querySelector('.nav__toggle')
const btnNavListClose = document.querySelector('.nav--close')
const navbarContainer = document.querySelector('.navbar__container--sub')
const navLinks = document.querySelectorAll('.nav__link')

const allSections = document.querySelectorAll('.section')

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

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    closeNav()
  })
})

//////////////////////////////////////////// REVEAL SECTION

const revealSection = function (entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const observerSection = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
})

allSections.forEach(function (section) {
  observerSection.observe(section)

  section.classList.add('section--hidden')
})
