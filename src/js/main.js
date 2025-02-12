import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Splide from '@splidejs/splide';

new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function() {
var splide = new Splide( '.splide' );
splide.mount();
} );