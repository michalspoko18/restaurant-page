import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function() {
var splide = new Splide( '.splide', {
    arrows: false,
    autoHeight: true
} );
splide.mount();
} );