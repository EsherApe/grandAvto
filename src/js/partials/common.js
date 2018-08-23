import $ from 'jquery';

let nextArrowTpl = "<button type='button' class='slick-next'><img src='./img/chevron-right__icon.svg' alt=''></button>";
let prevArrowTpl = "<button type='button' class='slick-prev'><img src='./img/chevron-left__icon.svg' alt=''></button>";

//slider component
$('.slider__carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: nextArrowTpl,
  prevArrow: prevArrowTpl,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
});