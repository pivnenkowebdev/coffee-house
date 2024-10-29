import ModelMenu from '../js/modelMenu.js';
import ViewMenu from '../js/viewMenu.js';

const model = new ModelMenu();
const view = new ViewMenu();

// flags
view.elementControll.windowWidth = window.innerWidth;
view.elementControll.isMobile = false;

// for mobile / desctop menu render
if (view.elementControll.windowWidth <= 768) {
   view.elementControll.isMobile = true;
} else {
   view.elementControll.isMobile = false;
}

// event change category
view.elementControll.menuButtonsList.forEach((btn) => {
   btn.addEventListener('click', (e) => {
      if (e.target.dataset.action) {
         view.changeStatusBtn(e.target);
         view.elementControll.isMobile = true;
         view.getData(model.getCurrentCategory(e.target.dataset.action));
      }
   })
})

// open modal
view.elementControll.listProducts.addEventListener('click', (e) => {

   view.elementControll.listCard = view.elementControll.listProducts.querySelectorAll('.card-product');

   view.elementControll.listCard.forEach((card) => {

      if (e.target.closest('.card-product').dataset.name === card.dataset.name) {
         view.getCurrentCard(model.getCurrentCategory(view.findActiveBtn()), card.dataset.name);
      }

   });
});

// close modal
window.addEventListener('click', (e) => {

   const triggerClose = e.target;

   if (triggerClose.classList.contains('modal__close') || triggerClose.classList.contains('fade')) {

      view.elementControll.openModal = document.querySelector('.modal');

      view.closeModal(view.elementControll.openModal);
   }
})

// change status btn inside modal
window.addEventListener('click', (e) => {

   // btn size
   if (e.target.dataset.size && !e.target.classList.contains('active')) {

      view.elementControll.btnsSizes = document.querySelectorAll('[data-size]');

      view.elementControll.btnsSizes.forEach((btn) => {

         if (btn.classList.contains('active')) {
            view.changePrice(-btn.dataset.size);
         }

      })

      view.changePrice(e.target.dataset.size);

      view.changeStatusBtnSizes(e.target);

   } else if (e.target.dataset.size && e.target.classList.contains('active')) {

      alert('already selected');

   }

   // btn mode
   if (e.target.dataset.mode  && !e.target.classList.contains('active')) {

      view.elementControll.btnsMode = document.querySelectorAll('[data-mode]');

      view.changePrice(e.target.dataset.mode);

      view.changeStatusBtnMode(e.target);

   } else if (e.target.dataset.mode && e.target.classList.contains('active')) {

      view.changeStatusBtnMode(e.target);

      view.changePrice(-e.target.dataset.mode);

   }

})

// mobile render
window.addEventListener('resize', () => {

      view.elementControll.windowWidth = window.innerWidth;

   if (view.elementControll.windowWidth <= 768) {

      view.elementControll.isMobile = true;

      view.getData(model.getCurrentCategory(view.findActiveBtn()),
      view.elementControll.isMobile);

   } else {
      view.elementControll.isMobile = false;
      view.hiddenBtnRefrash();
      view.getData(model.getCurrentCategory(view.findActiveBtn()),
      view.elementControll.isMobile);
   }

})

// btn refrash
view.elementControll.btnRefrash.addEventListener('click', () => {

   view.elementControll.isMobile = false;

   view.getData(model.getCurrentCategory(view.findActiveBtn()),
      view.elementControll.isMobile);

   view.hiddenBtnRefrash();
})

// default render from start
view.getData(model.getCurrentCategory(view.findActiveBtn()), view.elementControll.isMobile);

