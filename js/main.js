import Menu from "./mainMenu/menu.js";
import products from "./products/products.js";
import slider from "./slider/slider.js";


async function allData(){
    await swiper()
    await products()
}

allData()

async function swiper() {
  await Menu.mainMenu();
  await Menu.mainBtns();
  await slider()

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
