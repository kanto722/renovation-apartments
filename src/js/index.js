import { TimelineMax } from 'gsap';

/**
 ** window onload function - Preloader
 */
document.body.style.overflow = 'hidden';

const onLoadHandler = () => {
  const loader = document.getElementById('loader-js');
  const tl = new TimelineMax();
  tl.to(loader, {
    opacity: 0,
    onComplete: () => {
      document.body.style.overflow = 'visible';
      loader.style.display = 'none';
    }
  });
};

window.onload = onLoadHandler;

/**
 *----------------------------------------------
 */
 var swiper = new Swiper(".mySwiper", {

});
var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper5 = new Swiper(".mySwiper5", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper6 = new Swiper(".mySwiper6", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});