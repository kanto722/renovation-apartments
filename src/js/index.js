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
