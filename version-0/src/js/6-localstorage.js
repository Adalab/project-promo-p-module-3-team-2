'use strict';

function getLocalStorage() {
  const savedInfo = localStorage.getItem('savedInfo');

  if (savedInfo !== null) {
    dataObjets = JSON.parse(savedInfo);

    const paletteClassToAdd = `palette-${dataObjets.palette}`;
    previewContainer.classList.remove('palette-1');
    previewContainer.classList.remove('palette-2');
    previewContainer.classList.remove('palette-3');
    previewContainer.classList.remove('palette-4');
    previewContainer.classList.remove('palette-5');
    previewContainer.classList.remove('palette-6');
    previewContainer.classList.add(paletteClassToAdd);

    for (const radioButton of allRadioButtons) {
      if (radioButton.id === paletteClassToAdd) {
        radioButton.checked = true;
      }
    }

    for (const itemInput of input) {
      if (itemInput.id === 'completeName') {
        itemInput.value = dataObjets.name;
      } else if (itemInput.id === 'marketStall') {
        itemInput.value = dataObjets.job;
      } else if (itemInput.id === 'addemail') {
        itemInput.value = dataObjets.email;
      } else if (itemInput.id === 'addphone') {
        itemInput.value = dataObjets.phone;
      } else if (itemInput.id === 'addLinkedin') {
        itemInput.value = dataObjets.linkedin;
      } else if (itemInput.id === 'addGithub') {
        itemInput.value = dataObjets.github;
      }

      if (dataObjets.photo !== '') {
        profileImage.style.backgroundImage = `url(${dataObjets.photo})`;
        profilePreview.style.backgroundImage = `url(${dataObjets.photo})`;
      }
    }

    renderPreview();
  }
}
