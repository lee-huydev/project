const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// ! View
const items = document.querySelectorAll('.item-js');
const observer = new IntersectionObserver(
   (entris) => {
      entris.forEach((entry) => {
         const { target } = entry;
         target.classList.toggle('active', entry.isIntersecting);
         if (target.classList.toggle('active', entry.isIntersecting)) {
            observer.unobserve(target);
         }
      });
   },
   {
      rootMargin: '0px 0px -30% 0px',
   }
);
items.forEach(function (element) {
   observer.observe(element);
});

// ! Toast
toast = () => {
   const div = document.createElement('div');
   const toast = $('#toastId');
   div.classList.add('toast-msg');
   toast.appendChild(div);
   div.innerHTML = '<p>Xin lỗi về sự bất tiện này, vui lòng vào cửa hàng để mua sản phẩm</p>';
   setTimeout(function () {
      div.remove();
   }, 3000);
};
const btnBuy = $$('.btn-buy');
btnBuy.forEach((e) => {
   e.addEventListener('click', (event) => {
      event.preventDefault();
      toast();
   });
});

//! Menu Mobile
$('.menu-mobile').addEventListener('click', () => {
   $('.menu-drop').classList.toggle('active');
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
