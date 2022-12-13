import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryPlace = document.querySelector('.gallery');

galleryPlace.insertAdjacentHTML('afterbegin', galleryRender(galleryItems));

function galleryRender(galleryForCreate) {
   return galleryForCreate
      .map(({ original, preview, description }) => {
         return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
      })
      .join('');
}






// galleryPlace.addEventListener('click', event => {
//    event.preventDefault();
//    if (!event.target.classList.contains('gallery__image')) {
//       return;
//    }
//    const instance = basicLightbox.create(`
//             <img src="${event.target.dataset.source}" width="800" height="600">
//         `);
//    instance.show();
//    document.addEventListener('keydown', closeWindowByEscape);
//    function closeWindowByEscape(event) {
//       if (event.code !== 'Escape') {
//          return;
//       }
//       instance.close();
//       document.removeEventListener('keydown', closeWindowByEscape);
//    }
// });
