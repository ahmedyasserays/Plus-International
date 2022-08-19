let loading = document.querySelector(".loading")
window.onload = () => {
  loading.classList.add("hidden")
}
let mmdb = document.getElementById("mega-menu-full-dropdown-button")
let mmfd = document.getElementById("mega-menu-full-dropdown")
let navLinks = document.querySelectorAll("#mega-menu-full > ul > li > a")

const hidden_drop_menu_list = () => {
  mmfd.classList.add("hidden")
  mmdb.setAttribute("aria-expanded" , "false")
}
const visiable_drop_menu_list = () => {
  mmfd.classList.remove("hidden")
  mmdb.setAttribute("aria-expanded" , "true")
}

hidden_drop_menu_list()

mmdb.onmouseover = ()=>{
  visiable_drop_menu_list();
}
mmfd.onmouseleave = () => {
  hidden_drop_menu_list();
}
navLinks.forEach(link => {
  link.onmouseover = () => {
    hidden_drop_menu_list();
  }
})

AOS.init();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
