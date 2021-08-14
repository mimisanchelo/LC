'use strict'

const galleryImgs = document.querySelectorAll('.gallery__img')
const previewBox = document.querySelector('.preview-box')
const previewImg = previewBox.querySelector('img')
const closeBox = previewBox.querySelector('.box__close')
const curentImg = document.querySelector('.current-img')
const totalImg = document.querySelector('.total-img')
const overlayBox = document.querySelector('.overlayBox')

window.onload = function () {
  for (let i = 0; i < galleryImgs.length; i++) {
    let newIndex = i
    let clickedImgIndex
    totalImg.textContent = galleryImgs.length

    galleryImgs[i].addEventListener('click', function () {
      clickedImgIndex = newIndex
      function preview() {
        curentImg.textContent = newIndex + 1
        let selecetedImgUrl = galleryImgs[newIndex].querySelector('img').src
        previewImg.src = selecetedImgUrl
      }

      const prevBtn = document.querySelector('.prev')
      const nextBtn = document.querySelector('.next')
      //   PREV BTN
      prevBtn.addEventListener('click', function () {
        if (newIndex == 0) {
          newIndex = galleryImgs.length - 1
        } else {
          newIndex--
        }
        preview()
      })
      //  NEXT BTN
      nextBtn.addEventListener('click', function () {
        if (newIndex >= galleryImgs.length - 1) {
          newIndex = 0
        } else {
          newIndex++
        }
        preview()
      })

      preview()
      previewBox.classList.add('show')
      overlayBox.classList.add('nav__overlay--sub')

      // CLOSE BTN
      closeBox.addEventListener('click', function () {
        newIndex = clickedImgIndex
        previewBox.classList.remove('show')
        overlayBox.classList.remove('nav__overlay--sub')
      })
    })
  }
}
