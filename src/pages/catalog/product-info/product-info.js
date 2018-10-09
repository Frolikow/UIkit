class ProductPage {
  constructor(element) {
    this.fullProductMedia = $(element);
    this.productTitle = $('.js-product-page-content__info-title');
    this.productPrice = $('.js-product-page-content__info-buy-price');
    this.productBuy = $('.js-product-page-content__buy-item');
    this.params = [];
    this.initData();
  }
  initData() {
    this.params = window.location.search.replace('?', '').split('&').reduce(
      (p, e) => {
        const a = e.split('=');
        p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      },
      {},
    );
    if (this.params.imageName !== undefined) {
      this.render();
    }
  }
  render() {
    let count = 0;
    while (count < 4) {
      count += 1;
      const img = document.createElement('IMG');
      img.src = require(`../../../style/images/productImages/${this.params.imageName}${count}.jpeg`);
      img.className = 'product-page-content__media-picture';
      this.fullProductMedia.append(img);
    }
    this.productTitle.html(this.params.carName);
    this.productPrice.html(`${this.params.carPrice} руб./час`);
    this.productBuy.attr('href', `./buy-item.html?imageName=${this.params.imageName}&carName=${this.params.carName}&carPrice=${this.params.carPrice}`);
  }
}

$(document).ready(() => {
  $('.js-product-page-content__media').each(function () {
    new ProductPage(this);
  });
});
