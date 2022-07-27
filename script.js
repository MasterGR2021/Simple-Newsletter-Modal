'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close');
const btnOpenModal = document.querySelector('.open');

const closeModal = function () {
  overlay.classList.remove('show');
  modal.classList.remove('show');
};

const openModal = function () {
  overlay.classList.add('show');
  modal.classList.add('show');
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});
