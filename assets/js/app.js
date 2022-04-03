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

// !Search
$('.search-js').addEventListener('click', (e) => {
   e.preventDefault();
   $('#modal-search').classList.add('active');
});
$('.input-close').addEventListener('click', (e) => {
   e.preventDefault();
   $('#modal-search').classList.remove('active');
   $('.history').classList.remove('active-his');
});
// ! History
$('.input-search').addEventListener('click', (e) => {
   e.preventDefault();
   $('.history').classList.add('active-his');
});
let localSearch = localStorage.getItem('history')
   ? JSON.parse(localStorage.getItem('history'))
   : [];
checkValue = () => {
   let valueInput = $('.input-search').value;
   $('.input-search').addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
         if (valueInput !== '') {
            localSearch.push(valueInput);
            localStorage.setItem('history', JSON.stringify(localSearch));
         }
         valueInput = '';
         if ($('.input-search').value === 'cafe') {
            location.replace('../Store/store.html');
         } else if (
            $('.input-search').value === 'thực đơn' ||
            $('.input-search').value === 'thuc don'
         ) {
            location.replace('../Menu/menu.html');
         } else {
            $('#modal-search').classList.remove('active');
            alert('Không tìm thấy sản phẩm');
            location.reload();
         }
         $('.input-search').value = '';
      }
   });
};
// Render local ra history
let valueLocal = JSON.parse(localStorage.getItem('history'));
renderLocal = (valueInput) => {
   const li = document.createElement('li');
   const span = document.createElement('span');
   const i = document.createElement('i');
   span.innerHTML = `${valueInput}`;
   span.classList.add('span');
   i.classList.add('fa-light', 'fa-xmark', 'del-his');
   li.appendChild(span);
   li.appendChild(i);
   $('.list').appendChild(li);
};
if (valueLocal !== null) {
   for (let valueInput of valueLocal) {
      renderLocal(valueInput);
   }
}
// Delete history
const del = $$('.del-his');
for (let index in del) {
   del[index].onclick = () => {
      del[index].parentNode.remove();
      let valueHtml = $$('.span');
      let newValue = [];
      for (let i of valueHtml) {
         newValue.push(newLocal(i.innerHTML));
      }
      localStorage.setItem('history', JSON.stringify(newValue));
   };
}
let newLocal = function (value) {
   let newLocal = value;
   return newLocal;
};
