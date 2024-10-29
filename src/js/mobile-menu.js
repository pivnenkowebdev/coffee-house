// vars
const burgerBtn = document.querySelector('#burgerBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const mobileAnchors = document.querySelectorAll('.mobiles-anchors');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
   burgerBtn.classList.toggle('active');
   mobileMenu.classList.toggle('open');
   body.classList.toggle('active');
})

mobileAnchors.forEach((link) => {
   link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      mobileMenu.classList.remove('open');
      body.classList.remove('active');
   })
})

window.addEventListener('resize', () => {
   burgerBtn.classList.remove('active');
   mobileMenu.classList.remove('open');
   body.classList.remove('active');
})