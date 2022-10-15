let mmdb = document.getElementById("mega-menu-full-dropdown-button")
let mmfd = document.getElementById("mega-menu-full-dropdown")
let navLinks = document.querySelectorAll("#mega-menu-full > ul > li > a")
// let loading = document.querySelector(".loading")

AOS.init();

// window.onload = () => {
//   loading.classList.add("hidden")
// }

navLinks.forEach(link => {
  if (link.pathname.slice(0, 5) == window.location.pathname.slice(0, 5)) {
    link.classList.add("text-primary")
  }
  if (window.location.pathname == "/index.html") {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[0].classList.add("text-primary")
    }
  }
})

const hidden_drop_menu_list = () => {
  mmfd.classList.add("hidden")
  mmdb.setAttribute("aria-expanded" , "false")
}
const visiable_drop_menu_list = () => {
  mmfd.classList.remove("hidden")
  mmdb.setAttribute("aria-expanded" , "true")
}

hidden_drop_menu_list()

mmdb.onclick = ()=>{
  window.location.href = "/brands.html"
}

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
