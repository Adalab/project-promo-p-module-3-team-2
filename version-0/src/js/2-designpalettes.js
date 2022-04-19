'use strict';
const previewContainer = document.querySelector('.js-preview');
const allRadioButtons = document.querySelectorAll('.js_radio');

function handleClickRadioUnique(event) {
  const paletteClassToAdd = `palette-${event.currentTarget.value}`;
  let paletteSaved = event.currentTarget.value;
  previewContainer.classList.remove('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.remove('palette-4');
  previewContainer.classList.remove('palette-5');
  previewContainer.classList.remove('palette-6');
  previewContainer.classList.add(paletteClassToAdd);
  dataObjets.palette = paletteSaved;
  localStorage.setItem('savedInfo', JSON.stringify(dataObjets));
}

for (const eachRadioButton of allRadioButtons) {
  eachRadioButton.addEventListener('click', handleClickRadioUnique);
}
