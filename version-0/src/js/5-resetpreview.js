'use strict';
const input = document.querySelectorAll('.js-input');

const reset = document.querySelector('.js-reset');
function handleClickReset() {
  document.getElementById('myform').reset();
  resetCard();
}

function resetCard() {
  handleClickRadioUnique(event);
  cardPersonalInfo.innerHTML = 'Nombre Apellido';
  cardJob.innerHTML = 'Front-End developer';
  iconEmail.href = '';
  iconPhone.href = '';
  iconGithub.href = '';
  iconLinkedin.href = '';
  profileImage.style = '';
  profilePreview.style = '';
  dataObjets = {
    palette: 1,
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };

  for (let index = 0; index < input.length; index++) {
    input[index].value = '';
  }
  localStorage.removeItem('savedInfo');
}

reset.addEventListener('click', handleClickReset);
