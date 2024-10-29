document.addEventListener('DOMContentLoaded', function() {
   class Slider {
      constructor(slider) {

         this.slider = slider;
         this.arrowPrev = this.slider.querySelector('[data-arrow="prev"]');
         this.arrowNext = this.slider.querySelector('[data-arrow="next"]');
         this.sliderTrack = this.slider.querySelector('#sliderTrack');
         this.allSlides = this.slider.querySelectorAll('.slide');
         this.timeShowStatus = document.querySelectorAll('.controll-slider__btn');

         this.counterSlides = 0;
         this.slideWidth = this.allSlides[0].offsetWidth;
         this.pointStartSwipe = null;
         this.pointEndSwipe = null;

         this.isPause = false;
         this.isMoved = false;

         this.showStatus();
      
         this.automaticMoution();

         this.arrowPrev.addEventListener('click', this.actionSlider.bind(this, 'prev'));
         this.arrowNext.addEventListener('click', this.actionSlider.bind(this, 'next'));

         this.sliderTrack.addEventListener('touchstart', (e)=> {
            this.onPauseMoution();
            this.startSwipe(e);
         });

         this.sliderTrack.addEventListener('touchend', (e) => {
            this.offPauseMoution();
            this.pointStartSwipe = null;
            this.pointEndSwipe = null;
         });

         this.sliderTrack.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.endSwipe(e);

               if (this.pointStartSwipe > this.pointEndSwipe + this.slideWidth / 2) {
                  this.actionSlider('next');
                  this.isMoved = true;
               }
               else if (this.pointStartSwipe < this.pointEndSwipe - this.slideWidth / 2) {
                  this.actionSlider('prev');
                  this.isMoved = true;
               }
               setTimeout(() => {
                  this.isMoved = false;
               }, 1000);
               return;
   
         });
         
         this.sliderTrack.addEventListener('mouseover', this.onPauseMoution.bind(this));
         this.sliderTrack.addEventListener('mouseout', this.offPauseMoution.bind(this));
      }

      actionSlider(direction) {
         if (!this.isMoved) {

            if (direction === 'prev') {
               this.counterSlides--;

               if (this.counterSlides < 0) {
                  this.counterSlides = this.allSlides.length - 1;
               }

               this.resetTimer();
               this.moutionSlider();
               this.showStatus();
               this.automaticMoution();

            } else if (direction === 'next') {
               this.counterSlides++;

               if (this.counterSlides >= this.allSlides.length) {
                  this.counterSlides = 0;
               }

               this.resetTimer();
               this.moutionSlider();
               this.showStatus();
               this.automaticMoution();
            }

            this.isMoved = true;
            setTimeout(() => {
               this.isMoved = false;
            }, 500);
         }
      }

      moutionSlider() {
         this.sliderTrack.style.transform = `translateX(${this.slideWidth * -this.counterSlides}px)`;
      }

      automaticMoution() {
         this.interval = setInterval(() => {

            if (!this.isPause && !this.isMoved) {
               this.actionSlider('next');
               this.showStatus(this.isPause);
            }

            
         }, 7000);
      }

      resetTimer() {
         clearInterval(this.interval);
      }

      onPauseMoution() {
         this.isPause = true;
         this.showStatus();
      }

      offPauseMoution() {
         this.isPause = false;
         this.showStatus();
      }

      startSwipe(e) {
         e.preventDefault();
         this.pointStartSwipe = e.changedTouches[0].pageX;
      }

      endSwipe(e) {
         e.preventDefault();
         this.pointEndSwipe = e.changedTouches[0].pageX;
      }

      showStatus() {
         for (let i = 0; i < this.timeShowStatus.length; i++) {
            const currentSlide = this.timeShowStatus[i];
      
            if (i === this.counterSlides) {
               currentSlide.firstElementChild.classList.add('moution');
      
               currentSlide.firstElementChild.style.animationPlayState = this.isPause ? 'paused' : 'running';
            } else {
               currentSlide.firstElementChild.classList.remove('moution');
            }
         }
      }
   }

   const slider = new Slider(document.querySelector('#slider'));

});
