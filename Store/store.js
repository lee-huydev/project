const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const product = [
   {
      number: 02,
      name: 'Cafe SÁNG TẠO 8',
      price: '179.999',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 03,
      name: 'Cafe LEGEND',
      price: '900.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 04,
      name: 'Hộp quà LEGEND',
      price: '960.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 05,
      name: 'Cafe Chế Phin Loại 1',
      price: '80.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 06,
      name: 'Cafe Sáng tạo 1 - 340gr',
      price: '50.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 07,
      name: 'Cafe G7 3 in 1',
      price: '115.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 08,
      name: 'Cafe truyền thống',
      price: '90.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 09,
      name: 'Cafe chồn',
      price: '800.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 10,
      name: 'Cafe Latte',
      price: '40.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 11,
      name: 'Cafe Espresso',
      price: '150.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
   {
      number: 12,
      name: 'Capuccino',
      price: '250.000',
      img: '../assets/img/brazilfortalezaproduktbildhems.jpeg',
   },
];
const addCarts = $$('.add-cart');
let cartLocal = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
for (let addCart of addCarts) {
   addCart.addEventListener('click', (e) => {
      e.preventDefault();
      const attriBute = addCart.parentNode.parentNode.parentNode.getAttribute('number');
      product.forEach((e) => {
         if (e.number == Number(attriBute)) {
            let obj = {
               name: e.name,
               price: e.price,
               img: e.img,
            };
            cartLocal.push(obj);
            localStorage.setItem('cart', JSON.stringify(cartLocal));
         }
      });
   });
}
