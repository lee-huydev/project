const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Toggle menu
const menuMobile = document.querySelector('.menu-mobile');
const menuDrop = document.querySelector('.menu-drop');

menuMobile.addEventListener('click', function () {
   menuDrop.classList.toggle('active');
});

//! Quantity items in cart
const valueCart = JSON.parse(localStorage.getItem('cart'));
if (valueCart) {
   let quantity = 0;
   valueCart.forEach((e) => {
      quantity += Number(e.quantity);
      $('.quantity-item').innerHTML = quantity;
   });
   if (quantity > 0) {
      $('.quantity-item').classList.add('active');
   }
}
