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
    const fullProductMedia = document.getElementsByClassName('fullProduct_media')[0];
    const img = document.createElement('IMG');
    img.src = require(`./../productImages/${params.carImage}${count}.jpeg`);
    fullProductMedia.appendChild(img);
  }
  const productTitle = document.getElementsByClassName('fullProduct_info_title')[0];
  productTitle.innerHTML = params.carName;

  const productPrice = document.getElementsByClassName('fullProduct_info_buy_price')[0];
  productPrice.innerHTML = `${params.carPrice} руб./час`;

  const buyItem = document.getElementsByClassName('productBuyItem')[0];
  buyItem.href = `./buyItem.html?carImage=${params.carImage}&carName=${params.carName}&carPrice=${params.carPrice}`;
});
