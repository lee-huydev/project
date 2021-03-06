const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const product = [
   {
      number: 1,
      img: '../assets/img/bellaproduktbild5721x3455326x5-187fb7cc-7aa1-40b8-b27d-0e896bf519f3.jpeg',
      price: 150,
      name: 'Cafe SÁNG TẠO 8',
      gram: '1 gói 250 gram',
      id: 10222,
   },
   {
      number: 2,
      img: '../assets/img/elsalvadormenendezproduktbildh-dc68826c-6cf9-4fe6-86f2-15033128576b.webp',
      price: 179,
      name: 'Cafe SÁNG TẠO 5',
      gram: '1 gói 250 gram',
      id: 10234,
   },
   {
      number: 3,
      img: '../assets/img/colombiadecafproduktbildhemsid.jpeg',
      price: 900,
      name: 'Cafe LEGEND',
      gram: '1 gói 150 gram',
      id: 10223,
   },
   {
      number: 4,
      img: '../assets/img/caravanproduktbild5721x3455326-c84e5abb-aa0f-4f47-8bfc-ee3e74689f70.webp',
      price: 960,
      name: 'Cafe Caravan ',
      gram: '1 gói 500 gram',
      id: 10225,
   },
   {
      number: 5,
      img: '../assets/img/buenavistaproduktbild5721x3455.jpeg',
      price: 80,
      name: 'Cafe Chế Phin Loại 1',
      gram: '1 gói 250 gram',
      id: 10226,
   },
   {
      number: 6,
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
      price: 50,
      name: 'Cafe SÁNG TẠO 1',
      gram: '1 gói 340 gram',
      id: 11457,
   },
   {
      number: 7,
      img: '../assets/img/bourbonjungleproduktbild5721x3-9162173b-31d3-46b2-a303-56f78b557aca.webp',
      price: 115,
      name: 'Cafe G7 3 in 1',
      gram: '1 gói 250 gram',
      id: 10002,
   },
   {
      number: 8,
      img: '../assets/img/esperanzaproduktbild5700x34553-48d8cf11-46d5-4ee2-978d-cb640f1f7364.webp',
      price: 90,
      name: 'Cafe truyền thống',
      gram: '1 gói 350 gram',
      id: 11155,
   },
   {
      number: 9,
      img: '../assets/img/ethiopiagujiproduktbildhemsida-91aadddb-8d8d-4139-a367-a8dbc3b65ebe.jpeg',
      price: 800,
      name: 'Cafe chồn',
      gram: '1 gói 350 gram',
      id: 10564,
   },
   {
      number: 10,
      img: '../assets/img/ethiopiagujiproduktbildhemsida-91aadddb-8d8d-4139-a367-a8dbc3b65ebe.jpeg',
      price: 40,
      name: 'Cafe Latte',
      gram: '1 gói 250 gram',
      id: 10336,
   },
   {
      number: 11,
      img: '../assets/img/fikaproduktbild5721x3455326x54.jpeg',
      price: 150,
      name: 'Cafe Espresso',
      gram: '1 gói 250 gram',
      id: 10221,
   },
   {
      number: 12,
      img: '../assets/img/ftoproduktbild5721x3455326x540.jpeg',
      price: 250,
      name: 'Capuccino',
      gram: '1 gói 150 gram',
      id: 11134,
   },
];
//! Add item in user to store
const itemsLocal = JSON.parse(localStorage.getItem('items'));
if (itemsLocal && itemsLocal.length !== 0) {
   itemsLocal.forEach((e) => {
      product.push(e);
   });
}
const AllItemsStore = localStorage.setItem('allItems', JSON.stringify(product));
//! Add product in local then render in admin
// const productToAdmin = [];
// product.forEach((e) => {
//    productToAdmin.push(e);
//    localStorage.setItem('product', JSON.stringify(productToAdmin));
// });

//! Add Number items above cart
const valueCart = JSON.parse(localStorage.getItem('cart'));
if (!valueCart || valueCart.length === 0) {
   $('.quantity-item').classList.remove('active');
} else {
   $('.quantity-item').classList.add('active');
}
let totalItems = 0;
numberCart = () => {
   totalItems += 1;
   $('.quantity-item').innerHTML = totalItems;
   localStorage.setItem('totalItem', JSON.stringify(totalItems));
};
if (valueCart) {
   valueCart.forEach((e) => {
      totalItems += Number(e.quantity);
      $('.quantity-item').innerHTML = totalItems;
      localStorage.setItem('totalItem', JSON.stringify(totalItems));
   });
}
//! Render items
product.map((element) => {
   const div = document.createElement('div');
   div.classList.add('item');
   $('.product-container').appendChild(div);
   let contentDiv = `
   <span class="img">
      <img
      class="image image-item"
      src="${element.img}"
      alt=""
      />
</span>
<div class="information">
   <div class="detail">
      <div class="price">
         <p>${element.price}.000₫</p>
      </div>
      <a href="">${element.name}</a>
      <p>${element.gram}</p>
   </div>
   <div class="buy">
   <a href="" class="add-cart" number="${element.id}">Mua ngay</a>
      <a href=""> Chi tiết</a>
   </div>
</div>
   `;
   div.innerHTML = contentDiv;
});

// ! Add cart
const addCarts = $$('.add-cart');
let cartLocal = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
for (let addCart of addCarts) {
   addCart.addEventListener('click', (e) => {
      e.preventDefault();
      $('.quantity-item').classList.add('active');
      numberCart();
      const attriBute = addCart.getAttribute('number');
      product.forEach((e) => {
         if (e.id === Number(attriBute)) {
            let obj = {};
            obj = {
               id: e.id,
               img: e.img,
               name: e.name,
               price: e.price,
               quantity: 1,
               totalPrice: e.price,
            };
            if (cartLocal.length === 0) {
               cartLocal.push(obj);
            } else if (cartLocal.length >= 1) {
               let isExist = cartLocal.some((e) => {
                  return obj.id === e.id;
               });
               if (isExist === false) {
                  cartLocal.push(obj);
               } else {
                  let valueLocal = cartLocal;
                  valueLocal.forEach((e) => {
                     if (e.id === obj.id) {
                        e.quantity += 1;
                        e.totalPrice = e.price * e.quantity;
                     }
                  });
                  cartLocal = {};
                  cartLocal = valueLocal;
               }
            }
            localStorage.setItem('cart', JSON.stringify(cartLocal));
            cartLocal.forEach((e) => {
               if (e.id === Number(attriBute)) {
                  toast(e.img, e.name, e.quantity);
               }
            });
         }
      });
   });
}
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
