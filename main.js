import '/assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min';
import './node_modules/jquery/dist/jquery.min.js';

import './node_modules/swiper/swiper-bundle.min.css';
import './node_modules/swiper/swiper-bundle.min.js';



// validation
$('.needs-validation').each(function(index){
  $(this).on('submit', function(e){
    e.preventDefault();
    $(this).addClass('was-validated');
  })
})




console.log("Hello world!");