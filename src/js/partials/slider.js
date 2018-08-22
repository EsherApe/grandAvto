import $ from 'jquery';

let nextArrowTpl = "<button type='button' class='slick-next'><img src='./img/chevron-right__icon.svg' alt=''></button>";
let prevArrowTpl = "<button type='button' class='slick-prev'><img src='./img/chevron-left__icon.svg' alt=''></button>";

$('.top__carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
});

$('.slider__carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: nextArrowTpl,
  prevArrow: prevArrowTpl,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});