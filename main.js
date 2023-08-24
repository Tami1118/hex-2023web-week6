import '/assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min';
import './node_modules/jquery/dist/jquery.min.js';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import AOS from 'aos';
import './node_modules/aos/dist/aos.css';


// jquery - validation
$('.needs-validation').each(function(index){
  $(this).on('submit', function(e){
    e.preventDefault();
    $(this).addClass('was-validated');
  })
})


// swiper
const swiper = new Swiper(".mySwiper", {
  allowTouchMove: false,
  slidesPerView: "auto",
  loop: true,
  speed: 20000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  centeredSlides: true,
});

const reverseSwiper = new Swiper(".reverseSwiper", {
  allowTouchMove: false,
  slidesPerView: "auto",
  loop: true,
  speed: 20000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  centeredSlides: true,
});


// AOS
AOS.init();