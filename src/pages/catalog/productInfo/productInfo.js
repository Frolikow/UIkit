
'use strict';

$(function () {
  var params = window.location.search.replace('?', '').split('&').reduce(
    function (p, e) {
      var a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    },
    {}
  );
  var count=0;
  for(var i=0;i<4;i++){
    count++;
    var fullProductMedia = document.getElementsByClassName('fullProduct_media')[0],
    img = document.createElement("IMG");
    img.src = require("./../productImages/"+params['carImage']+count+".jpeg");
    fullProductMedia.appendChild(img);
  }
  var productTitle = document.getElementsByClassName('fullProduct_info_title')[0];
  productTitle.innerHTML = params['carName'];

  var productPrice = document.getElementsByClassName('fullProduct_info_buy_price')[0];
  productPrice.innerHTML = params['carPrice']+' руб./час';
  
  var buyItem =document.getElementsByClassName('productBuyItem')[0];
  buyItem.href='./buyItem.html?carImage='+params['carImage']+'&carName='+params['carName']+'&carPrice='+params['carPrice'];

})