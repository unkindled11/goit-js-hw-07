import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");


const items = galleryItems
    .map(element => `
    <div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"/>
        </a>
    </div>`).join("");

gallery.insertAdjacentHTML("afterbegin", items);


gallery.addEventListener("click", (element) => {
    
    element.preventDefault();

    if (element.target.nodeName !== "IMG") {
    return;
    }

    console.log(element.target.dataset.source);

    const instance = basicLightbox.create(`
    <img src="${element.target.dataset.source}" >

`);

instance.show(()=> console.log('lightbox not visible anymore'))
});


console.log(galleryItems);