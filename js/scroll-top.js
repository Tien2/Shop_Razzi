// SCROLL TO TOP
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// SCROLL CART TO TOP
// const stickyTop = document.querySelector(".stickyTop");
// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 500) {
//     toTop.classList.add("sticky-top");
//   } else {
//     toTop.classList.remove("sticky-top");
//   }
// });
