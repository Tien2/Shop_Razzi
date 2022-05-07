$(document).ready(function () {
  $(".review-image-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
});
