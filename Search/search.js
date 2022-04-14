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
         valueCart.forEach((d) => {
            if (d.id === Number(number)) {
               d.quantity += Number(value);
            }
         });
         let exist = valueCart.find((f) => {
            if (f.id === Number(number)) {
               return f.id;
            }
         });
         if (!exist) {
            let obj = {
               id: e.id,
               img: e.img,
               name: e.name,
               price: e.price,
               quantity: Number(value),
               totalPrice: e.price * Number(value),
            };
            valueCart.push(obj);
         }
      }
   });
   localStorage.removeItem('cart');
   localStorage.setItem('cart', JSON.stringify(valueCart));
   valueCart.forEach((e) => {
      if (e.id === Number(number)) {
         toast(e.img, e.name, e.quantity);
      }
   });
});

// !Toast message
const toastContainer = document.createElement('div');
toastContainer.classList.add('toast-container');
$('#toast').appendChild(toastContainer);
toast = (img, name, quan) => {
   const div = document.createElement('div');
   div.classList.add('toast-msg');
   toastContainer.appendChild(div);
   toastMsg = `
               <span class="img">
                  <img
                     src="${img}"
                     alt=""
                     class="img-toast"
                  />
               </span>
               <div class="text">
                  <h3>ĐÃ THÊM VÀO GIỎ HÀNG</h3>
                  <p class="name">Sản phẩm: ${name}</p>
                  <p class="number">Số lượng: ${quan}</p>
               </div>
   `;
   div.innerHTML = toastMsg;
   setTimeout(function () {
      div.remove();
   }, 2500);
};
//! Quantity items in cart
const valueCarts = JSON.parse(localStorage.getItem('cart'));
if (valueCarts) {
   let quantity = 0;
   valueCarts.forEach((e) => {
      quantity += Number(e.quantity);
      $('.quantity-item').innerHTML = quantity;
   });
   if (quantity > 0) {
      $('.quantity-item').classList.add('active');
   }
}

// Toggle menu
const menuMobile = document.querySelector('.menu-mobile');
const menuDrop = document.querySelector('.menu-drop');

menuMobile.addEventListener('click', function () {
   menuDrop.classList.toggle('active');
});
