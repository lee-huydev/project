const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//! User login
$('.form-signup').addEventListener('click', (e) => {
   e.preventDefault();
});
const signup = $('.sign-up');
signup.addEventListener('click', (e) => {
   e.preventDefault();
   const username = $('.username').value;
   const pass = $('.pass').value;
   if (username === 'admin@@' && pass === 'admin123') {
      location.replace('../Admin/admin.html');
   } else {
      alert('Wrong');
      location.reload();
   }
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
// ! Toggle menu
const menuMobile = document.querySelector('.menu-mobile');
const menuDrop = document.querySelector('.menu-drop');

menuMobile.addEventListener('click', function () {
   menuDrop.classList.toggle('active');
});
