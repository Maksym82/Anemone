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
