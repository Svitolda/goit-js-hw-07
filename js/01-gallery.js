import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListReference = document.querySelector('.gallery');
const imageMarkup = createGalleryImageMarkup(galleryItems);

// console.log(galleryListReference)
galleryListReference.insertAdjacentHTML('beforeend', imageMarkup);

galleryListReference.addEventListener('click', ongalleryClick);


function createGalleryImageMarkup(galleryItems) {
return galleryItems
    .map((image) =>
    `<li li class="gallery__item">
        <a class="gallery__link" href= "${image.original}" >
            <img
                class="gallery__image"
                src= "${image.preview}"
                data-source= "${image.original}"
                alt= "${image.description}"
            />
        </a>
    </li>`).join("");
};

function ongalleryClick(evt) {
    evt.preventDefault();
    const currentItem = evt.target;
    if (currentItem.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show()
    
}
