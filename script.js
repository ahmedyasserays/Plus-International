const hidden_drop_menu_list = () => {
  let mmdb = document.getElementById("mega-menu-full-dropdown-button")
  let mmfd = document.getElementById("mega-menu-full-dropdown")
  mmfd.classList.add("hidden")
  mmdb.setAttribute("aria-expanded" , "false")
}
hidden_drop_menu_list()

AOS.init();
