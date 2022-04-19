'use strict';

const createButton = document.querySelector('.js_create_button');
const twitterButton = document.querySelector('.js-twitterButton');
const urlCard = document.querySelector('.js_url_card');
const createCard = document.querySelector('.js-fourFieldset');
const cardMessage = document.querySelector('.js-errorCard');

function handleClickCreateButton(event) {
  event.preventDefault();

  if (
    dataObjets.palette !== '' &&
    dataObjets.name !== '' &&
    dataObjets.job !== '' &&
    dataObjets.email !== '' &&
    dataObjets.linkedin !== '' &&
    dataObjets.github !== '' &&
    dataObjets.photo !== ''
  ) {
    createButton.classList.add('creating');

    fetch('//awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataObjets),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          urlCard.innerHTML = result.cardURL;
          urlCard.href = result.cardURL;
          createCard.classList.remove('collapsed');
          cardMessage.innerHTML = 'La tarjeta ha sido creada:';
        }
      });
  } else {
    cardMessage.innerHTML = 'Rellena todos los datos del formulario';
  }
}

function twitterShare(event) {
  event.preventDefault();
  const url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20con%20el%20Awesome%20profile%20cards%20del%20equipo%20Ninfas&url=${urlCard.href}`;
  window.open(url, '_blank');
}
getLocalStorage();
createButton.addEventListener('click', handleClickCreateButton);
twitterButton.addEventListener('click', twitterShare);
