// const $ = document.querySelector.bind(document);
$('.form-signup').addEventListener('click', (e) => {
   e.preventDefault();
});
const signup = $('.sign-up');
signup.addEventListener('click', (e) => {
   e.preventDefault();
   const username = $('.username').value;
   const pass = $('.pass').value;
   if (username === 'admin@@' && pass === 'admin123') {
      location.replace('../Admin/admin.html');
   } else {
      alert('Wrong');
      location.reload();
   }
});
