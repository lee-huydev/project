const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const valueCarts = JSON.parse(localStorage.getItem('cart'));
renderCart = (id, name, price, src, quantity, totalPrice) => {
   const tbody = document.createElement('tbody');
   const cartLocal = $('.cart-local');
   cartLocal.appendChild(tbody);
   const tr = document.createElement('tr');
   tbody.appendChild(tr);
   tr.innerHTML = `
   <td>
   <img src="${src}" alt="" class='image'>
   </td>
   <td>${name}</td>
   <td>${price}.000₫</td>
   <td class='quan'>
   <input type='number' min='1' class='quantity' oninput='checkNumber()' value="${quantity}" number="${id}"/>
   </td>
   <td>${totalPrice}.000₫</td>
   <td><button class="delete" number="${id}">Xóa</button></td>
   `;
};
valueCartInLocal = () => {
   for (let valueCart of valueCarts) {
      renderCart(
         valueCart.id,
         // valueCart.number,
         valueCart.name,
         valueCart.price,
         valueCart.img,
         valueCart.quantity,
         valueCart.totalPrice
      );
   }
};
if (!valueCarts || valueCarts.length == 0) {
   $('.cart-emty').classList.add('active');
} else {
   $('.cart-emty').classList.remove('active');
   $('.cart-local').classList.add('active-cart');
   $('.total').classList.add('active-total');
   valueCartInLocal();
}
const quantitys = $$('.quantity');
checkNumber = () => {
   quantitys.forEach((element) => {
      element.onclick = () => {
         let attriBute = element.getAttribute('number');
         valueCarts.forEach((e) => {
            if (Number(e.id) === Number(attriBute)) {
               e.quantity = element.value;
               let price = e.price * e.quantity;
               e.totalPrice = price;
               localStorage.removeItem('cart');
               localStorage.setItem('cart', JSON.stringify(valueCarts));
               location.reload();
            }
         });
      };
      element.addEventListener('keyup', (event) => {
         event.preventDefault();
         if (event.keyCode === 13) {
            let attriBute = element.getAttribute('number');
            valueCarts.forEach((e) => {
               if (Number(e.id) === Number(attriBute)) {
                  e.quantity = Number(element.value);
                  let price = e.price * e.quantity;
                  e.totalPrice = price;
                  localStorage.removeItem('cart');
                  localStorage.setItem('cart', JSON.stringify(valueCarts));
                  location.reload();
               }
            });
         }
      });
   });
};
// Delete cart
const dels = $$('.delete');
for (let index in dels) {
   dels[index].onclick = () => {
      valueCarts.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(valueCarts));
      location.reload();
   };
}
//! Total Price Need Pay
const pay = $('.total-price');
let total = 0;
if (valueCarts !== null) {
   let totalPrices = valueCarts.map((e) => {
      return e.totalPrice;
   });
   for (totalPrice of totalPrices) {
      total += Number(totalPrice);
   }
}

function formatNumber(num) {
   var n = Number(num);
   return n.toLocaleString('vi');
}
pay.innerHTML = `${formatNumber(total)}.000₫`;

$('.pay').addEventListener('click', () => {
   location.replace('../Pay/pay.html');
});
