(() => {
  const refs = {
    openBuyModalBtns: document.querySelectorAll('[data-modal-open-buy]'),
    closeBuyModalBtn: document.querySelector('[data-modal-close-buy]'),
    closeModalThankBtn: document.querySelector('[data-modal-close-thankyou]'),
    submitBuyBtn: document.querySelector('[data-hero-button-buy-submit]'),
    buyModal: document.querySelector('[data-modal-buy]'),
    thankModal: document.querySelector('[data-top-sellers-thankyou]'),
  };

  refs.openBuyModalBtns.forEach(addToggleEvent);
  refs.closeBuyModalBtn.addEventListener('click', toggleBuyModal);
  refs.closeModalThankBtn.addEventListener('click', toggleThankModal);
  refs.submitBuyBtn.addEventListener('click', closeBuyModalAndShowThankyou);

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
