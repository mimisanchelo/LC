'use strict'

// ///////VARIABLES
// navbar
const navlist = document.querySelector('.nav__list')
const btnNavListOpen = document.querySelector('.nav__toggle')
const btnNavListClose = document.querySelector('.nav--close')
const navbarContainer = document.querySelector('.navbar__container')
const navLinks = document.querySelectorAll('.nav__link')

// tabmenu

const tabsContainer = document.querySelector('.operation__tab-container')
const tabs = document.querySelectorAll('.operation__tab')
const tabsContent = document.querySelectorAll('.operation__field')

// rest

const allSections = document.querySelectorAll('.section')

/////////////////////////// PRELOAD

window.addEventListener('load', function () {
  document.body.classList.remove('preload')
})

/////////////////////////// FUNCTIONS HEADER

const openNav = function () {
  navlist.classList.add('nav--open')
  navbarContainer.classList.add('nav__overlay')

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
  navlist.classList.remove('nav--open')
  navbarContainer.classList.remove('nav__overlay')

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

////////////////////////////// TAB MENU

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operation__tab')

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

//////////////////////////////////////// CCOOKIE MESSAGE

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

////////////////////////////////////////// PROMO

// const promoClose = document.querySelector('.promo--close')
// const promotionContainer = document.querySelector('.promotion')
// const promotionOverlay = document.querySelector('.promotion__overlay')
// const subscribeLink = document.querySelector('.subscribe__btn--link')
// // CLOSE BTN
// promoClose.addEventListener('click', function () {
//   promotionContainer.remove()
//   promotionOverlay.classList.add('hidden')
// })
// // SUB BTN
// subscribeLink.addEventListener('click', function () {
//   promotionContainer.remove()
//   promotionOverlay.classList.add('hidden')
// })
// //MAKE IT VISIBLE
// setTimeout(function () {
//   promotionContainer.classList.remove('hidden')
//   promotionOverlay.classList.remove('hidden')
// }, 6000)

// ///////////////////////////////////////NAV STYLE ON SCROLL

window.addEventListener('scroll', () => {
  let current = ''

  allSections.forEach(function (section) {
    const sectionTop = section.offsetTop // PX OF EACH SECTION
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach(function (link) {
    link.classList.remove('nav__link--active')
    if (link.classList.contains(current)) {
      link.classList.add('nav__link--active')
    }
  })
})
////////////////////////////////////////////// REVEAL SECTION

// const revealSection = function (entries, observer) {
//   const [entry] = entries
//   if (!entry.isIntersecting) return

//   entry.target.classList.remove('section--hidden')
//   observer.unobserve(entry.target)
// }

// const observerSection = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.1,
// })

// allSections.forEach(function (section) {
//   observerSection.observe(section)

//   section.classList.add('section--hidden')
// })

///////////////////////////////////////////////// STICKY NAV

const header = document.querySelector('.header')
const headerCoords = header.getBoundingClientRect()

const stickyNav = function (entries) {
  const [entry] = entries

  if (!entry.isIntersecting && window.innerWidth < 990) {
    return
  } else {
    if (!entry.isIntersecting && window.innerWidth > 990) {
      navbarContainer.classList.add('nav__sticky')
    } else {
      navbarContainer.classList.remove('nav__sticky')
    }
  }
}

const navStickyPlace = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-74px',
})

navStickyPlace.observe(header)
