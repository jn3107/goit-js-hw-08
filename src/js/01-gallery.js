// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const markup = galleryItems.map(({ original, preview, description }) => {
   return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
});

galleryList.insertAdjacentHTML('beforeend', markup.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
    nameData: 'alt',
    longDelay: 250,
});


