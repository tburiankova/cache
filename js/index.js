import $ from 'jquery';
import gsap from 'gsap';
import * as ScrollMagic from 'scrollmagic';

//hero
const h1 = document.getElementById('h1');
const btns = document.querySelector('.heading-btns');
const scrollAnimation = document.querySelector('.scroll-animation-wrapper');
const menu = document.querySelector('.topbar__menu__btn');
const logo = document.querySelector('.logo-wrapper');
const caption = document.querySelector('.topbar__text');

const heroTl = gsap.timeline();

heroTl
  .from([h1, btns], {
    delay: 0.5,
    duration: 1,
    opacity: 0,
    x: -500,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.25,
    },
  })
  .fromTo(
    logo,
    {
      opacity: 0,
      y: -100,
    },
    {
      delay: -0.8,
      duration: 1,
      opacity: 1,
      y: 0,
    }
  )
  .fromTo(
    [menu, caption],
    {
      opacity: 0,
      y: 100,
    },
    {
      delay: -0.5,
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power3.inOut',
    }
  )
  .fromTo(
    scrollAnimation,
    {
      opacity: 0,
    },
    {
      delay: -1,
      duration: 1.5,
      opacity: 1,
    }
  );

//features scroll fade-in
$('.feature').each(function () {
  var controller = new ScrollMagic.Controller();
  var SMScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.8,
    reverse: false,
  })

    .setClassToggle(this, 'fade-in')
    .addTo(controller);
});
