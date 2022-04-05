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
