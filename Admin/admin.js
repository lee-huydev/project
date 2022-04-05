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
