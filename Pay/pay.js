//! Address
if ((address_2 = localStorage.getItem('address_2_saved'))) {
   $('select[name="calc_shipping_district"] option').each(function () {
      if ($(this).text() == address_2) {
         $(this).attr('selected', '');
      }
   });
   $('input.billing_address_2').attr('value', address_2);
}
if ((district = localStorage.getItem('district'))) {
   $('select[name="calc_shipping_district"]').html(district);
   $('select[name="calc_shipping_district"]').on('change', function () {
      var target = $(this).children('option:selected');
      target.attr('selected', '');
      $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected');
      address_2 = target.text();
      $('input.billing_address_2').attr('value', address_2);
      district = $('select[name="calc_shipping_district"]').html();
      localStorage.setItem('district', district);
      localStorage.setItem('address_2_saved', address_2);
   });
}
$('select[name="calc_shipping_provinces"]').each(function () {
   var $this = $(this),
      stc = '';
   c.forEach(function (i, e) {
      e += +1;
      stc += '<option value=' + e + '>' + i + '</option>';
      $this.html('<option value="">Tỉnh / Thành phố</option>' + stc);
      if ((address_1 = localStorage.getItem('address_1_saved'))) {
         $('select[name="calc_shipping_provinces"] option').each(function () {
            if ($(this).text() == address_1) {
               $(this).attr('selected', '');
            }
         });
         $('input.billing_address_1').attr('value', address_1);
      }
      $this.on('change', function (i) {
         i = $this.children('option:selected').index() - 1;
         var str = '',
            r = $this.val();
         if (r != '') {
            arr[i].forEach(function (el) {
               str += '<option value="' + el + '">' + el + '</option>';
               $('select[name="calc_shipping_district"]').html(
                  '<option value="">Quận / Huyện</option>' + str
               );
            });
            var address_1 = $this.children('option:selected').text();
            var district = $('select[name="calc_shipping_district"]').html();
            localStorage.setItem('address_1_saved', address_1);
            localStorage.setItem('district', district);
            $('select[name="calc_shipping_district"]').on('change', function () {
               var target = $(this).children('option:selected');
               target.attr('selected', '');
               $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected');
               var address_2 = target.text();
               $('input.billing_address_2').attr('value', address_2);
               district = $('select[name="calc_shipping_district"]').html();
               localStorage.setItem('district', district);
               localStorage.setItem('address_2_saved', address_2);
            });
         } else {
            $('select[name="calc_shipping_district"]').html(
               '<option value="">Quận / Huyện</option>'
            );
            district = $('select[name="calc_shipping_district"]').html();
            localStorage.setItem('district', district);
            localStorage.removeItem('address_1_saved', address_1);
         }
      });
   });
});

//! Bill

let valueCartLocal = JSON.parse(localStorage.getItem('cart'));
const itemContainer = document.querySelector('.item-container');
bill = () => {
   let total = 0;
   valueCartLocal.forEach((e) => {
      const div = document.createElement('div');
      div.classList.add('item');
      itemContainer.appendChild(div);
      let element = `
      <span class="img">
      <img
         src="${e.img}"
         alt=""
         class="image"
      />
   </span>
   <div class="text">
      <p class="name">${e.name}</p>
      <span class="number">Số lượng: ${e.quantity}</span>
   </div>
   <span class="price">${e.price}.000₫</span>
      `;
      div.innerHTML = element;
      const tempPrice = document.querySelector('.temp');
      total += e.totalPrice;
      function formatNumber(num) {
         var n = Number(num);
         return n.toLocaleString('vi');
      }
      tempPrice.innerHTML = `${formatNumber(total)}.000₫`;
      const totalPricePay = document.querySelector('.totalPricePay');
      let price = Number(formatNumber(total)) + 0.04;
      totalPricePay.innerHTML = `${price}.000₫`;
   });
};
bill();
const sendOrder = document.querySelector('.send');
const email = document.querySelector('.email');
const name = document.querySelector('.name');
const phone = document.querySelector('.phone');
const add = document.querySelector('.add');
sendOrder.onclick = (e) => {
   if (email.value !== '' && name.value !== '' && phone.value !== '' && add.value !== '') {
      e.preventDefault();
      localStorage.removeItem('cart');
      location.replace('../Store/store.html');
   }
};
