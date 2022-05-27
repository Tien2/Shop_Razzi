// SCROLL TO TOP
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// STICKY NAVBAR
var elementPosition = $("#Top_bar").offset();

$(window).scroll(function () {
  if ($(window).scrollTop() > elementPosition.top) {
    $("#Top_bar").addClass("Top_bar-fixed");
    $("#Top_bar").removeClass("Top_bar");
  } else {
    $("#Top_bar").removeClass("Top_bar-fixed");
    $("#Top_bar").addClass("Top_bar");
  }
});
// STICKY ITEM CART ON TOP
const Top = document.querySelector(".to-top1");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 900) {
    Top.classList.add("active1");
  } else {
    Top.classList.remove("active1");
  }
});
