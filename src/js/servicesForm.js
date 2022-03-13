"use strict";
document.addEventListener('DOMContentLoaded', () => {
  const modalContent = document.getElementById('modal_content');
  const form = document.getElementById('services_form');
  const formReq = form.querySelectorAll('._require');
  const closeModalButton = document.querySelector('.modal__close');
  formReq.forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('_error')) formRemoveError(input);
    });
  });

  form.addEventListener('submit', formSend);

  async function formSend (e) {
    e.preventDefault();
    let error = formValidate(form);
    if (error === 0) {
      modalContent.classList.add('_sending');
      const data = new FormData(form);
      let response = await fetch('servicesForm.php', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        form.reset();
        modalContent.classList.add('_good');
        const delClass = () => {
          modalContent.classList.remove('_good');
          closeModalButton.click();
        }
        setTimeout(delClass, 2000);
      } else {
        modalContent.classList.add('_bad');
        const delClass = () => {
          modalContent.classList.remove('_bad');
          closeModalButton.click();
        }
        setTimeout(delClass, 2000);
      }
      modalContent.classList.remove('_sending');
    }
  }

  const formValidate = () => {
    let error = 0;
    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);
      if (input.classList.contains('_name')) {
        if (input.value.length < 2) {
          formAddError(input);
          error++;
        }
      } else if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
    return error;
  }

  const formAddError = (input) => {
    // input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  const formRemoveError = (input) => {
    // input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  const emailTest = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
});
