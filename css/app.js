// STYLE BODY-REVIEW
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
//  STYLE BODY-SALE
$(document).ready(function () {
  $(".body-sale-content").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".body-time").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
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
// STYLE BODY-BRANCH
// $(document).ready(function () {
//   $(".body-branch-slider").slick({
//     infinite: false,
//     slidesToShow: 7,
//     arrows: false,
//     dots: false,
//     responsive: [
//       {
//         breakpoint: 1025,
//         settings: {
//           slidesToShow: 2,
//           arrows: true,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 668,
//         settings: {
//           slidesToShow: 2,
//           arrows: true,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   });
// });
