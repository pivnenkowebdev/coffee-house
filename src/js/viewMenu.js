// images coffee
import imgesCoffee1 from '../img/coffee/irish-coffee.jpg';
import imgesCoffee2 from '../img/coffee/kahlua-coffee.jpg';
import imgesCoffee3 from '../img/coffee/honey-raf.jpg';
import imgesCoffee4 from '../img/coffee/ice-cappuccino.jpg';
import imgesCoffee5 from '../img/coffee/espresso.jpg';
import imgesCoffee6 from '../img/coffee/latte.jpg';
import imgesCoffee7 from '../img/coffee/latte-macchiato.jpg';
import imgesCoffee8 from '../img/coffee/coffee-with-cognac.jpg';

// images tea
import imgesTea1 from '../img/tea/moroccan.jpg';
import imgesTea2 from '../img/tea/ginger.jpg';
import imgesTea3 from '../img/tea/cranberry.jpg';
import imgesTea4 from '../img/tea/sea-buckthorn.jpg';

// images dessert
import imgesDessert1 from '../img/dessert/marble-cheesecake.jpg';
import imgesDessert2 from '../img/dessert/red-velvet.jpg';
import imgesDessert3 from '../img/dessert/cheesecakes.jpg';
import imgesDessert4 from '../img/dessert/creme-brulee.jpg';
import imgesDessert5 from '../img/dessert/pancakes.jpg';
import imgesDessert6 from '../img/dessert/honey-cake.jpg';
import imgesDessert7 from '../img/dessert/chocolate-cake.jpg';
import imgesDessert8 from '../img/dessert/black-forest.jpg';

export default class ViewMenu {

   constructor() {

      // not only element controll((0(
      this.elementControll = {
         menuButtonsList: document.querySelectorAll('[data-action]'),
         listProducts: document.querySelector('#listProducts'),
         listCard: null,
         menuContent: document.querySelector('.menu-food__content'),
         fade: document.querySelector('.fade'),
         body: document.body,
         openModal: null,
         btnsSizes: null,
         btnsMode: null,
         currentCard: null,
         defaultPrice: null,
         windowWidth: null,
         isMobile: null,
         btnRefrash: document.querySelector('.btn-refrash'),
      }

   }

   findActiveBtn() {
      return document.querySelector('.btn-choice.active').dataset.action;
   }

   changeStatusBtn(eventBtn) {

      this.elementControll.menuButtonsList.forEach((btn) => {

         btn.classList.remove('active');

      });

      eventBtn.classList.add('active');

   }

   changeStatusBtnSizes(eventBtn) {
      this.elementControll.btnsSizes.forEach((btn) => {

         btn.classList.remove('active');

      });

      eventBtn.classList.add('active');
   }

   changeStatusBtnMode(eventBtn) {
      eventBtn.classList.toggle('active');
   }

   getData(listProducts) {

      this.clearRender();
      this.createCard(listProducts, this.elementControll.isMobile);
   }

   createCard(listProducts, isMobile) {

      if (listProducts.length > 4 && isMobile) {
         this.elementControll.btnRefrash.style.display = 'block';
      } else {
         this.elementControll.btnRefrash.style.display = 'none';
      }

      if (!isMobile) {

         for (let i = 0; i < listProducts.length; i++) {
            const cardProduct = `
               <li class="list-products__item">
                  <button class="card-product" data-name=${listProducts[i].dataName}>
                     <div class="card-product__holder-img">
                        <img src="${listProducts[i].imgSrc}.jpg" alt="${listProducts[i].description}">
                     </div>
                     <div class="card-product__info">
                        <div class="card-product__title">
                           ${listProducts[i].name}
                        </div>
                        <div class="card-product__description">
                           <p>${listProducts[i].description}</p>
                        </div>
                        <div class="card-product__price">
                           <span class="card-product__currency-symbol">$</span><span class="card-product__sum">${listProducts[i].price}</span>
                        </div>
                     </div>
                  </button>
               </li>
            `;
            this.render(cardProduct);
         }

      } else {

         for (let i = 0; i <= 3; i++) {
            const cardProduct = `
               <li class="list-products__item">
                  <button class="card-product" data-name=${listProducts[i].dataName}>
                     <div class="card-product__holder-img">
                        <img src="${listProducts[i].imgSrc}.jpg" alt="${listProducts[i].description}">
                     </div>
                     <div class="card-product__info">
                        <div class="card-product__title">
                           ${listProducts[i].name}
                        </div>
                        <div class="card-product__description">
                           <p>${listProducts[i].description}</p>
                        </div>
                        <div class="card-product__price">
                           <span class="card-product__currency-symbol">$</span><span class="card-product__sum">${listProducts[i].price}</span>
                        </div>
                     </div>
                  </button>
               </li>
            `;
            this.render(cardProduct);
         }
      }
   }

   render(cardProduct) {
      this.elementControll.listProducts.insertAdjacentHTML('beforeend', cardProduct);
   }

   clearRender() {
      this.elementControll.listProducts.innerHTML = '';
   }

   getCurrentCard(currentCategory, currentCard) {
      for(let i = 0; i < currentCategory.length; i++) {
         if (currentCategory[i].dataName === currentCard) {
            this.renderModal(currentCategory[i]);
            return
         }
      }
   }
   
   renderModal(currentCard) {
      const modal =
      `
      <div class="modal">
         <div class="modal__row">
            <div class="modal__img">
               <img src="${currentCard.imgSrc}.jpg" alt="${currentCard.description}">
            </div>
            <div class="modal__info">
               <div class="modal__description">
                  <p class="modal__title">${currentCard.name}</p>
                  <p class="modal__recept">${currentCard.description}</p>
               </div>
               <div class="modal__function">
                  <p class="modal__small-title">Size</p>
                  <ul class="modal__list-btns">
                     <li class="modal__btn">
                        <label class="btn-choice active" data-size='${currentCard.sizes.s['add-price']}'>
                           <input type="radio" name="menu-section" class="btn-choice__real visually-hidden">
                           <span class="btn-choice__value btn-choice__value--size-s btn-choice__value--modal">
                              ${currentCard.sizes.s.size}
                           </span>
                        </label>
                     </li>
                     <li class="modal__btn">
                        <label class="btn-choice" data-size='${currentCard.sizes.m['add-price']}'>
                           <input type="radio" name="menu-section" class="btn-choice__real visually-hidden">
                           <span class="btn-choice__value btn-choice__value--size-m btn-choice__value--modal">
                           ${currentCard.sizes.m.size}
                           </span>
                        </label>
                     </li>
                     <li class="modal__btn">
                        <label class="btn-choice" data-size='${currentCard.sizes.l['add-price']}'>
                           <input type="radio" name="menu-section" class="btn-choice__real visually-hidden">
                           <span class="btn-choice__value btn-choice__value--size-l btn-choice__value--modal">
                           ${currentCard.sizes.l.size}
                           </span>
                        </label>
                     </li>
                  </ul>
               </div>
               <div class="modal__function">
                  <p class="modal__small-title">Additives</p>
                  <ul class="modal__list-btns">
                     <li class="modal__btn">
                        <label class="btn-choice btn-choice__mode" data-mode='${currentCard.additives[0]['add-price']}'>
                           <input type="radio" name="menu-section" class="btn-choice__real visually-hidden">
                           <span class="btn-choice__value btn-choice__value--mode-1 btn-choice__value--modal">
                           ${currentCard.additives[0].name}
                           </span>
                        </label>
                     </li>
                     <li class="modal__btn">
                        <label class="btn-choice btn-choice__mode" data-mode='${currentCard.additives[1]['add-price']}'>
                           <input type="radio" name="menu-section" class="btn-choice__real visually-hidden">
                           <span class="btn-choice__value btn-choice__value--mode-2 btn-choice__value--modal">
                           ${currentCard.additives[1].name}
                           </span>
                        </label>
                     </li>
                     <li class="modal__btn">
                        <label class="btn-choice btn-choice__mode" data-mode='${currentCard.additives[2]['add-price']}'>
                           <input type="radio" name="menu-section" class="btn-choice__real visually-hidden">
                           <span class="btn-choice__value btn-choice__value--mode-3 btn-choice__value--modal">
                           ${currentCard.additives[2].name}
                           </span>
                        </label>
                     </li>
                  </ul>
               </div>
               <div class="modal__total modal__title">
                  <p>Total:</p>
                  <p><span class="modal__total--symbol">$</span><span class="modal__total--price">${currentCard.price}</span></p>
               </div>
               <div class="modal__app">
                  <p class="modal__app-icon"></p><span class="modal__app-text">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</span>
               </div>
               <button class="modal__close">Close</button>
            </div>
         </div>
      </div>
      `;

      this.elementControll.fade.style.display = 'block';

      this.elementControll.body.classList.add('active');
      
      this.elementControll.menuContent.insertAdjacentHTML('beforeend', modal);

      this.elementControll.currentCard = currentCard;

      this.elementControll.defaultPrice = currentCard.price;

   }

   closeModal(openModal){

      openModal.remove();

      this.elementControll.fade.style.display = 'none';

      this.elementControll.body.classList.remove('active');

   }

   changePrice(priceBtn) {

      this.elementControll.openModal = document.querySelector('.modal');

      const priceFromBtn = Number(priceBtn);

      let currentPrice = Number(this.elementControll.defaultPrice);

      let sum = (currentPrice + priceFromBtn).toFixed(2);

      this.elementControll.defaultPrice = sum;

      this.elementControll.openModal.querySelector('.modal__total--price').innerHTML = sum;
   }

   hiddenBtnRefrash() {
      this.elementControll.btnRefrash.style.display = 'none';
   }

}