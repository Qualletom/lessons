document.addEventListener("DOMContentLoaded", () => {
  showOrderCallPopup();
});

function showOrderCallPopup() {
  const showButton = document.querySelector('.order-call-popup-btn');
  const closeButton = document.querySelector('.order-call-popup-close-btn');

  showButton.onclick = closeButton.onclick = function () {
    const popup = document.querySelector('.order-call-popup');

    popup.classList.toggle('hidden');
  }
}