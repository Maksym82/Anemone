// ===== Swiper section Blog =====

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ===== Mobile menu =====
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-header-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  for (let index = 0; index < mobileMenuLinks.length; index++) {
    mobileMenuLinks[index].addEventListener('click', toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// ===== Modal order =====
(() => {
  const refs = {
    openBuyModalBtns: document.querySelectorAll('[data-modal-open-buy]'),
    closeBuyModalBtn: document.querySelector('[data-modal-close-buy]'),
    closeModalThankBtn: document.querySelector('[data-modal-close-thankyou]'),
    closeModalContinue: document.querySelector('[data-modal-close-continue]'),
    openModalOrderFlowers: document.querySelector('[data-modal-order-flowers]'),
    submitBuyBtn: document.querySelector('[data-modal-order-submit]'),
    buyModal: document.querySelector('[data-modal-buy]'),
    thankModal: document.querySelector('[data-top-sellers-thankyou]'),
    openModalSub: document.querySelector('.blog__button'),
    modalSub: document.querySelector('[data-modal-open-sub]'),
    closeModalSub: document.querySelector('[data-modal-close-sub]'),
    subscribeDone: document.querySelector('.modal-sub__button'),
    emailSubscribe: document.querySelector('.modal-sub-mail-field'),
  };

  refs.openBuyModalBtns.forEach(addToggleEvent);
  refs.closeBuyModalBtn.addEventListener('click', toggleBuyModal);
  refs.closeModalThankBtn.addEventListener('click', toggleThankModal);
  refs.closeModalContinue.addEventListener('click', toggleThankModal);
  refs.openModalOrderFlowers.addEventListener('click', toggleBuyModal);
  refs.submitBuyBtn.addEventListener('click', closeBuyModalAndShowThankyou);
  refs.openModalSub.addEventListener('click', openSub);
  refs.closeModalSub.addEventListener('click', closeSub);
  refs.subscribeDone.addEventListener('click', subscribe);

  function openSub() {
    refs.modalSub.classList.toggle('is-hidden');
  }
  function closeSub() {
    refs.modalSub.classList.toggle('is-hidden');
  }

  function subscribe(event) {
    event.preventDefault();
    if (refs.emailSubscribe.value) {
      closeSub();
      refs.emailSubscribe.value = '';
    }
    console.log('Enter your email');
  }

  function toggleBuyModal() {
    refs.buyModal.classList.toggle('is-hidden');
  }

  function closeBuyModalAndShowThankyou() {
    toggleBuyModal();
    toggleThankModal();
  }

  function toggleThankModal() {
    refs.thankModal.classList.toggle('is-hidden');
  }

  function addToggleEvent(element) {
    element.addEventListener('click', toggleBuyModal);
  }
})();

