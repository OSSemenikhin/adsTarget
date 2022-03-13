@import "./plugins/choozzie.js";
@import "./plugins/modalGoody.js";
@import "./burger.js";
@import "./scrollToAnchor.js";
@import "./feedbackForm.js";
@import "./callMeForm.js";

const modal = new ModalGoody();

document.addEventListener('DOMContentLoaded', () => {
  // const back = document.createElement('button');
  // back.textContent = 'Вернуться назад';
  const wrapper = document.querySelector('.hero-content__wrapper');
  wrapper.innerHTML += '<button class="back-button">Вернуться назад</button>';
  const back = document.querySelector('.back-button');
  back.addEventListener('click', () => history.back());
});
