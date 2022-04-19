'use strict';
const titleDesign = document.querySelector('.js-titleDesign');
const titleFill = document.querySelector('.js-titleFill');
const titleShare = document.querySelector('.js-titleShare');

const firstFieldset = document.querySelector('.js-firstFieldset');
const secondFieldset = document.querySelector('.js-secondFieldset');
const thirdFieldset = document.querySelector('.js-thirdFieldset');

const angleDesign = document.querySelector('.js-angleDesign');
const angleFill = document.querySelector('.js-angleFill');
const angleShare = document.querySelector('.js-angleShare');

function openCollapsable(title) {
  if (title === 'design') {
    firstFieldset.classList.toggle('collapsed');
    secondFieldset.classList.add('collapsed');
    thirdFieldset.classList.add('collapsed');
  }
  if (title === 'fill') {
    firstFieldset.classList.add('collapsed');
    secondFieldset.classList.toggle('collapsed');
    thirdFieldset.classList.add('collapsed');
  }
  if (title === 'share') {
    firstFieldset.classList.add('collapsed');
    secondFieldset.classList.add('collapsed');
    thirdFieldset.classList.toggle('collapsed');
  }
}

function angleRotate(title) {
  if (title === 'design') {
    angleDesign.classList.toggle('rotate');
    angleFill.classList.add('rotate');
    angleShare.classList.add('rotate');
  }
  if (title === 'fill') {
    angleDesign.classList.add('rotate');
    angleFill.classList.toggle('rotate');
    angleShare.classList.add('rotate');
  }
  if (title === 'share') {
    angleDesign.classList.add('rotate');
    angleFill.classList.add('rotate');
    angleShare.classList.toggle('rotate');
  }
}

function handleCollapse(event) {
  event.preventDefault();
  const title = event.currentTarget.id;
  openCollapsable(title);
  angleRotate(title);
}

titleDesign.addEventListener('click', handleCollapse);
titleFill.addEventListener('click', handleCollapse);
titleShare.addEventListener('click', handleCollapse);
