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
// STYLE BODY-TIME
$(document).ready(function () {
  $(".body-time").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
// STYLE BODY-BRANCH
$(document).ready(function () {
  $(".branch-item").slick({
    slidesToShow: 7,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
// STYLE MODAL SELLERS CART
$(document).ready(function () {
  $(".modal-footer-cart-slick").slick({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          slidesToScroll: 2,
        },
      },
    ],
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});

// STYLE MODAL SELLERS VIEW
$(document).ready(function () {
  $(".body-view-img-slick").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
// STYLE BANNER SHOP
$(document).ready(function () {
  $(".shop-content-header").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// STYLE SLICK SLIDER T-SHIRTS
// T-SHIRTS CONTENT-IMG
$(".header-content-img").slick({
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".header-content-img-tab",
});
$(".header-content-img-tab").slick({
  slidesToShow: 4,
  asNavFor: ".header-content-img",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
});
// BODY-PRODUCT
$(document).ready(function () {
  $(".product-content-slick").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
// BODY-PRECENTLY
$(document).ready(function () {
  $(".recently-content-slick").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// BODY SELECTED TAB
$(document).ready(function () {
  $(".tab").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        dots: true,
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        dots: true,
      },
    ],
  });
});
// ABOUT-US REVIEW
$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  });
});
// BLOG
$(document).ready(function () {
  $(".post-item").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});
// SLICK SLIDER FEATURES
$(document).ready(function () {
  $(".slider__body--banner").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
$(document).ready(function () {
  $(".slider__body--collection").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
$(document).ready(function () {
  $(".slider__body--bottom").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
