const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 9,
  breakpoints: {
    320: {
      spaceBetween: 9,
      slidesPerView: 'auto',
    },
    1200: {
      slidesPerView: 5,
    },
  },
})

const swiperCard = new Swiper('.swiper-card', {
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

$(function () {
  $('a[href^="#"]').on('click', function (evt) {
    // отменяем стандартное действие
    evt.preventDefault()

    var sc = $(this).attr('href'),
      dn = $(sc).offset().top
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $('html, body').animate({ scrollTop: dn }, 1000)

    /*
     * 1000 скорость перехода в миллисекундах
     */
  })
})

$('.modal__close').on('click', function () {
  $(this).parent().parent().addClass('hidden')
  $('body').removeClass('hidden')
})

$('.card-modal__order').on('click', function () {
  $('.card-modal').addClass('hidden')
  $('body').removeClass('hidden')
})

$('.card').on('click', function () {})

const cards = document.querySelectorAll('.products__wrapper .swiper-slide')

cards.forEach((card) => {
  card.addEventListener('click', function () {
    document.querySelector('body').classList.add('hidden')
    const cardAtrs = card.getAttribute('data-swiper-slide-index')
    const cardModals = document.querySelectorAll('.card-modal')
    cardModals[cardAtrs].classList.remove('hidden')
  })
})

const formSubmitBtn = document.querySelector('form button')
const sentModal = document.querySelector('.sent-modal')

const showSentModal = function () {
  sentModal.classList.remove('hidden')
  setTimeout(() => {
    sentModal.classList.add('hidden')
  }, 4000)
}
formSubmitBtn.addEventListener('click', function (evt) {
  evt.preventDefault()
  showSentModal()
})
