const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const id = JSON.parse(localStorage.getItem('idSearch'));
const allProduct = JSON.parse(localStorage.getItem('allItems'));
const content = $('.content-container');
allProduct.forEach((e) => {
   if (Number(id) === e.id) {
      let text = `
      <div class="image">
      <span>
         <img
            src="${e.img}"
            alt=""
         />
      </span>
   </div>
   <div class="information">
      <h2>${e.name}</h2>
      <h3>${e.price}.000đ</h3>
      <p>Số lượng:</p>
      <input type="number" min="1" value="1" class="number" oninput="checkNumber()"/>
      <div class="btn-search">
         <button class="add-cart" number="${e.id}">Thêm vào giỏ hàng</button>
         <button class="back-store"><a href="../Store/store.html">Quay lại cửa hàng</a></button>
      </div>
   </div>
      `;
      content.innerHTML = text;
   }
});

//! Add cart
const number = $('.number');
let value = 1;
checkNumber = () => {
   number.setAttribute('value', number.value);
   value = number.value;
};
const valueCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
$('.add-cart').addEventListener('click', () => {
   const number = $('.add-cart').getAttribute('number');
   allProduct.forEach((e) => {
      if (Number(number) === e.id) {
         console.log(number);
         valueCart.forEach((d) => {
            if (d.id === Number(number)) {
               d.quantity += Number(value);
            } else {
               valueCart.push(e);
               if (valueCart.push(e)) return;
            }
         });
      }
   });
   console.log(valueCart);
});
