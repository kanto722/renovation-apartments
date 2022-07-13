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
var swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
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
var swiper7 = new Swiper(".mySwiper7", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const btn = document.querySelector('#btn-modal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-close');
const opac = document.querySelector('.modal-opac');


document.addEventListener('click', function (e) {
  if (e.target.dataset.toggle === 'btn') {
    modal.classList.add('modal__active');
    opac.classList.add('modal-opac__active');
  }
});

close.addEventListener('click', function(e) {
  modal.classList.remove('modal__active');
  opac.classList.remove('modal-opac__active');

});


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('animate__animated');
     change.target.classList.add('animate__fadeInLeft');
     change.target.classList.add('animate__faster');

    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

