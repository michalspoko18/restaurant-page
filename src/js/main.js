// Import scss files
import '../scss/styles.scss';
// import '../../node_modules/lightbox2/dist/css/lightbox.css';
import * as bootstrap from 'bootstrap';

// Import js files
import Splide from '@splidejs/splide';
// import '../../node_modules/lightbox2/dist/js/lightbox-plus-jquery.js';

document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '#slider1', {
        arrows: false,
        autoHeight: true,
        autoplay: true,
        type: 'loop',
    } ).mount();

    var splide2 = new Splide( '#slider2', {
        arrows: true,
        pagination: false,
        perPage: 3,
        gap: 30,
        classes: {
            arrows: 'splide__arrows gallery--buttons',
            arrow : 'splide__arrow gallery--buttons-arrow',
            prev  : 'splide__arrow--prev gallery--buttons-prev',
            next  : 'splide__arrow--next gallery--buttons-next',
    },

        breakpoints: {
            1200: {
                perPage: 2,
            },
            992: {
                perPage: 1,
            }
        }
    } ).mount();
} );

// Preloader
document.addEventListener("DOMContentLoaded",function(){
let node = document.querySelector('.preload-transitions');
node.classList.remove('preload-transitions');
});

// Hamburger Menu
const hamMenu = document.querySelector('.mobile-menu-btn');
const offScreenMenu = document.querySelector('.fixed-sidebar');
const blurContent = document.querySelector('.main-page-wrapper .page-content-two');

hamMenu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
    blurContent.classList.toggle('active');
});

// Close off screen menu
const closeMenu = document.querySelector('.menu-close-btn');

closeMenu.addEventListener('click', () => { 
    offScreenMenu.classList.toggle('active');
    blurContent.classList.toggle('active');
});

// Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true
  })