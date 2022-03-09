"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback_form');
  const formReq = document.querySelectorAll('._require');
  const inputs = form.querySelectorAll('input');
  formReq.forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('_error')) formRemoveError(input);
    });
  });

  form.addEventListener('submit', formSend);

  async function formSend (e) {
    e.preventDefault();
    let error = formValidate(form);
    console.log(error)
    if (error === 0) {
      form.classList.add('_sending');
      const data1 = new FormData(form);
      console.log(data1)
      const data = {};
      inputs.forEach(input => {
        data[input.name] = input.value;
      });
      console.log(data);
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: data1,
      });
      console.log(response)
      if (response.ok) {
        // let result = await response.json();
        // alert(result.message);
        form.reset();
      } else {
        alert('Ошибка');
      }
      form.classList.remove('_sending');
      console.log(form)
    } else {

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
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  const formRemoveError = (input) => {
    input.parentElement.classList.remove('_error');
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
