// !Search
$('.search-js').addEventListener('click', (e) => {
   e.preventDefault();
   $('#modal-search').classList.add('active');
});
$('.input-close').addEventListener('click', (e) => {
   e.preventDefault();
   $('#modal-search').classList.remove('active');
});
const input = $('.input-search');
const allItems = JSON.parse(localStorage.getItem('allItems'));
checkValue = () => {
   let valueSearch = input.value.trim();
   let valueFilter = allItems.filter((e) => {
      return e.name.toLowerCase().includes(valueSearch.toLowerCase());
   });
   if (input.value !== null && input.value !== '') {
      renderValueFilter(valueFilter);
   } else {
      $('.list').innerHTML = '';
      $('.product-search').classList.remove('active');
   }
};
renderValueFilter = (e) => {
   $('.list').innerHTML = '';
   $('.product-search').classList.add('active');
   e.forEach((element) => {
      const li = document.createElement('li');
      li.classList.add('click');
      li.setAttribute('number', element.id);
      let text = `
                          <span>
                             <img
                                src="${element.img}"
                                alt=""
                             />
                          </span>
                          <div class="infor">
                             <h4>${element.name}</h4>
                             <span>Giá: ${element.price}.000₫</span>
                          </div>
         `;
      li.innerHTML = text;
      $('.list').appendChild(li);
   });
   const clicks = $$('.click');
   clicks.forEach((d) => {
      d.addEventListener('click', () => {
         const id = d.getAttribute('number');
         localStorage.setItem('idSearch', JSON.stringify(id));
         location.replace('../Search/search.html');
      });
   });
};
