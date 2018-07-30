import $ from 'jquery';

$(() => {
  const params = window.location.search.replace('?', '').split('&').reduce(
    (p, e) => {
      const a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    },
    {},
  );

  for (let count = 0; count < 4;) {
    count += 1;
    const fullProductMedia = document.getElementsByClassName('js-product-page-content__media')[0];
    const img = document.createElement('IMG');
    img.src = require(`./../productImages/${params.pictureName}${count}.jpeg`);
    img.className = 'product-page-content__media-picture';
    fullProductMedia.appendChild(img);
  }
  const productTitle = document.getElementsByClassName('js-product-page-content__info-title')[0];
  productTitle.innerHTML = params.carName;

  const productPrice = document.getElementsByClassName('js-product-page-content__info-buy-price')[0];
  productPrice.innerHTML = `${params.carPrice} руб./час`;

  const buyItem = document.getElementsByClassName('js-product-page-content__buy-item')[0];
  buyItem.href = `./buy-item.html?pictureName=${params.pictureName}&carName=${params.carName}&carPrice=${params.carPrice}`;
});
