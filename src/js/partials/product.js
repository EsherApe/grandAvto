//product page carousel
import $ from "jquery";

$('.productView__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.productView__slider-nav'
});
$('.productView__slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.productView__slider-img',
  // centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
  ]
});