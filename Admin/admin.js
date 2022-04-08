const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//! Render product
const productAdmin = JSON.parse(localStorage.getItem('items'));
let i = 0;
if (productAdmin && productAdmin.length !== 0) {
   productAdmin.forEach((e) => {
      i++;
      const tr = document.createElement('tr');
      let element = `
      <td>${i}</td>
      <td>
         <span>
            <img
               src="${e.img}"
               alt=""
               class="image"
            />
         </span>
      </td>
      <td>${e.name}</td>
      <td>${e.price}.000₫</td>
      <td>
         <a href="">Sửa</a>
      </td>
      <td>
         <a href="" class="delete" number="${e.id}">Xoá</a>
      </td>
      `;
      tr.innerHTML = element;
      $('.tbody').appendChild(tr);
   });
}

//! Add product button
$('.add-items').addEventListener('click', (e) => {
   e.preventDefault();
   $('#modal-addProduct').classList.add('active');
});
$('.back').addEventListener('click', (e) => {
   e.preventDefault();
   $('#modal-addProduct').classList.remove('active');
});
let itemsMore = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
$('.submit').addEventListener('click', (e) => {
   e.preventDefault(e);
   const numbeRandom = Math.floor(Math.random() * 10000);
   const name = $('.name').value;
   const image = $('.img').value;
   const price = $('.price').value;
   const mass = $('.mass').value;
   const number = $('.number').value;
   if ((name, image, price, mass, number)) {
      let obj = {};
      obj = {
         number: Number(number),
         img: image,
         price: Number(price),
         name: name,
         gram: mass,
         id: numbeRandom,
      };
      // render value current to location
      const tr = document.createElement('tr');
      let element = `
      <td>${obj.number}</td>
      <td>
         <span>
            <img
               src="${obj.img}"
               alt=""
               class="image"
            />
         </span>
      </td>
      <td>${obj.name}</td>
      <td>${obj.price}.000₫</td>
      <td>
         <a href="">Sửa</a>
      </td>
      <td>
         <a href="" class="delete" number="${obj.id}">Xoá</a>
      </td>
      `;
      tr.innerHTML = element;
      $('.tbody').appendChild(tr);
      // Value to local
      itemsMore.push(obj);
      localStorage.setItem('items', JSON.stringify(itemsMore));
   }
});

// ! detele
const delItems = $$('.delete');
delItems.forEach((e) => {
   e.addEventListener('click', (d) => {
      d.preventDefault();
      let i = 0;
      let currentValue = productAdmin;
      const id = e.getAttribute('number');
      currentValue.forEach((j, index) => {
         if (Number(id) === j.id) {
            currentValue.splice(index, 1);
         }
      });
      currentValue.forEach((element) => {
         i++;
         element.number = i;
      });
      localStorage.setItem('items', JSON.stringify(currentValue));
      const element = e.parentNode.parentNode;
      element.remove();
   });
});

// ! Menu
$('.add-product').addEventListener('click', () => {
   $('.product').classList.add('active');
   $('.manage-order').classList.remove('active2');
   $('.bill-order').style.color = 'black';
   $('.add-product').style.color = '#dc8068';
});

$('.manage').onclick = () => {
   $('.list-child').classList.add('active');
   $('.manage').style.color = '#dc8068';
};
// ! Toast
const emty = $$('.emty');
toast = () => {
   const div = document.createElement('div');
   const toast = $('#toastId');
   div.classList.add('toast-msg');
   toast.appendChild(div);
   div.innerHTML = '<p>Chức năng đang được phát triển</p>';
   setTimeout(function () {
      div.remove();
   }, 2000);
};
emty.forEach((e) => {
   e.addEventListener('click', (e) => {
      e.preventDefault();
      toast();
   });
});

//! Bill order
$('.bill-order').addEventListener('click', () => {
   $('.product').classList.remove('active');
   $('.manage-order').classList.add('active2');
   $('.add-product').style.color = 'black';
   $('.bill-order').style.color = '#dc8068';
   $('.menu').style.display = 'none';
   $('.back').style.display = 'block';
});
$('.back-admin').onclick = () => {
   location.reload();
};
const customer = JSON.parse(localStorage.getItem('customer'));
if (customer.length !== 0 && customer !== null) {
   $('.emty-item').style.display = 'none';
   $('.no-emty').style.display = 'block';
   const tbody = document.createElement('tbody');
   $('.table-order').appendChild(tbody);
   tbody.classList.add('tbody', 'customer-order');
   let i = 0;
   customer.forEach((e, index) => {
      i++;
      const tr = document.createElement('tr');
      let element = `
      <td>${i}</td>
      <td>
         Email: ${e.information.email} <br />
         Họ và tên: ${e.information.name} <br />
         SĐT: ${e.information.phone} <br />
         Địa chỉ: ${e.information.add}, ${e.information.district}, ${e.information.country}
      </td>
      <td class="customer">
      </td>
      <td>${e.information.time}</td>
      <td>${e.information.note}</td>
      <td class="money">1</td>
      `;
      tr.innerHTML = element;
      $('.customer-order').appendChild(tr);
      let x = 0;
      let price = 0;
      e.items.forEach((d) => {
         price += d.totalPrice;
         x++;
         const b = document.createElement('b');
         b.innerHTML = `${x}/ ${d.name}`;
         const span = document.createElement('span');
         span.innerHTML = `- Số lượng: ${d.quantity}`;
         const customers = $$('.customer');
         customers[index].appendChild(b);
         customers[index].appendChild(span);
      });
      const moneys = $$('.money');
      function formatNumber(num) {
         var n = Number(num);
         return n.toLocaleString('vi');
      }
      price += 40.0;
      moneys[index].innerHTML = `${formatNumber(price)}.000đ`;
   });
}
