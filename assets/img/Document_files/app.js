const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $$$ = document.getElementsByClassName.bind(document);
const toDo = {
   deleteContent: function (element) {
      for (let x of element) {
         x.addEventListener('click', (e) => {
            x.parentNode.remove();
         });
      }
   },
   createContent: function () {
      $('.submit').addEventListener('click', (e) => {
         //   Submit content
         e.preventDefault();
         const li = document.createElement('li');
         const text = `
          <span>${$('.input').value}</span>
          <button class="delete">Delete</button>
          <button class="edit">Edit</button>`;
         li.innerHTML = text;
         $('.list-todo').appendChild(li);
         $('.input').value = '';
         //  Delete content
         this.deleteContent($$('.delete'));
         //  Edit content
         // const edit = $$('.edit');
         // for (let i of edit) {
         //    i.addEventListener('click', (e) => {
         //       e.preventDefault();
         //       i.parentNode.innerHTML = `<form id="edit-form">
         //       <input type="text" class="input-edit" placeholder="Enter here" />
         //       <input type="submit" class="input-submit" value="Ok" />
         //    </form>`;
         //       $('.input-submit').addEventListener('click', (e) => {
         //          e.preventDefault();
         //          $('#edit-form').parentNode.innerHTML = `
         //          <span>${$('.input-edit').value}</span>
         //          <button class="delete">Delete</button>
         //          <button class="edit">Edit</button>`;
         //          this.deleteContent($$('.delete'));
         //       });
         //    });
         // }
      });
   },
   editContent: () => {
      const edit = document.getElementsByClassName('edit');
      if (edit) {
         for (let i of edit) {
            i.onclick = function () {
               i.parentNode.innerHTML = `<form class="edit-form">
               <input type="text" class="input-edit" placeholder="Enter here" />
               <input type="submit" class="input-submit" value="Ok" />
            </form>`;
               const ok = document.getElementsByClassName('input-submit');
               for (let i of ok) {
                  i.addEventListener('click', (e) => {
                     e.preventDefault();
                     const editForm = document.getElementsByClassName('edit-form');
                     for (let i of editForm) {
                        i.parentNode.innerHTML = `
                        <span>${$('.input-edit').value}</span>
                                 <button class="delete">Delete</button>
                                 <button class="edit">Edit</button>`;
                     }
                  });
               }
            };
         }
      }
   },
};
toDo.createContent();
toDo.editContent();
