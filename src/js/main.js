// Import scss files
import '../scss/styles.scss';

// Import js files
import $ from 'jquery';
import lightbox from 'lightbox2';
import Splide from '@splidejs/splide';

window.$ = $;

// Lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
    'showImageNumberLabel': false
})

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
            arrows: 'splide__arrows gallery__buttons',
            arrow : 'splide__arrow gallery__buttons-arrow',
            prev  : 'splide__arrow--prev gallery__buttons-prev',
            next  : 'splide__arrow--next gallery__buttons-next',
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
const blurContent = document.querySelector('.wrapper .content');

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

// Menu Tab
window.openTab = function(evt, menuTab) {
    const tabcontent = document.querySelectorAll(".menu__tab-content");
    tabcontent.forEach(tab => tab.style.display = "none");

    const tablinks = document.querySelectorAll(".menu__tab");
    tablinks.forEach(tab => tab.classList.remove("active"));

    document.getElementById(menuTab).style.display = "block";
    evt.currentTarget.classList.add("active");
};

window.openTab = openTab;

document.addEventListener("DOMContentLoaded", function () {
    let defaultTab = document.getElementById("defaultTab");
    if (defaultTab) {
        defaultTab.click();
    }
});
