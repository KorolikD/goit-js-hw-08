// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryMarcup = createGalletyItemsMarcup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarcup);

function createGalletyItemsMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </div>
    `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  animationSpeed: 250,
});
