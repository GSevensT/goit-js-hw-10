import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelectEl = document.querySelector('.breed-select');
const catInforEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

//create options

function chooseBreed() {
  fetchBreeds().then(data => {
    loaderEl.classList.replace('loader', 'is-hidden');

    let optionsMarkup = data.map(({ id, name }) => {
      return `<options value=${id}>${name}</options>`;
    });
    breedSelectEl.insertAdjacentHTML('beforeend', optionsMarkup);
    breedSelectEl.classList.remove('is-hidden');
  });
}

chooseBreed();
