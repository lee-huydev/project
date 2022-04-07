const swiper = new Swiper('.swiper', {
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },

   // slidesPerView: 2,
   // spaceBetween: 50,
   // freeMode: true,
   // pagination: {
   //   el: ".swiper-pagination",
   //   clickable: true,
   // },
});
//! Check inView-text
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const inView = $$('.in-view');
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
      rootMargin: '0px 0px -20% 0px',
   }
);
const banner = $('.in__view-cupMilk');
inView.forEach(function (element) {
   observer.observe(element);
});
//! Check Inview-Cup Milk
const inviewCup = $('.in__view-cupMilk');
const cupMilk = new IntersectionObserver(
   (e) => {
      e.forEach((element) => {
         if (element.isIntersecting) {
            $('.banner__img-1').style.animation = `milk 2s linear 1s forwards`;
            $('.banner__img-2').style.animation = `cup 1s ease forwards`;
            $('.banner__img-3').style.animation = `dropMilk 0.2s ease-out 3s forwards`;
         }
      });
   },
   {
      rootMargin: '0px 0px -70% 0px',
   }
);
cupMilk.observe(inviewCup);
//! Menu Mobile
$('.menu-mobile').addEventListener('click', () => {
   $('.menu-drop').classList.toggle('active');
});
