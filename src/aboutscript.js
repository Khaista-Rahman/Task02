
const menu = document.getElementById("menu");
const menuContent = document.getElementById("menuContent");

menu.addEventListener("click", function () {
  if (menuContent.style.height === "0px" || menuContent.style.height === "") {
    menuContent.style.height = "150px";
  } else {
    menuContent.style.height = "0px";
  }
});

const fixedMenu = document.getElementById("fixedMenu");
const fixedMenuContent = document.getElementById("fixedMenuContent");

fixedMenu.addEventListener("click", function () {
  console.log("fixed button is clicked");
  if (
    fixedMenuContent.style.height === "0px" ||
    fixedMenuContent.style.height === ""
  ) {
    fixedMenuContent.style.height = "150px";
  } else {
    fixedMenuContent.style.height = "0px";
  }
});

window.addEventListener("scroll", function () {
  const navbarLg = document.getElementById("navbar-lg");
  const navbarSm = document.getElementById("navbar-sm");
  const scrollHeight = window.innerHeight;

  if (window.scrollY >= scrollHeight) {
    if (navbarLg) {
      navbarLg.classList.remove("-translate-y-full");
      navbarLg.classList.add("translate-y-0");
    }
    if (navbarSm) {
      navbarSm.classList.remove("-translate-y-full");
      navbarSm.classList.add("translate-y-0");
    }
  } else {
    if (navbarLg) {
      navbarLg.classList.add("-translate-y-full");
      navbarLg.classList.remove("translate-y-0");
    }
    if (navbarSm) {
      navbarSm.classList.add("-translate-y-full");
      navbarSm.classList.remove("translate-y-0");
    }
  }
});
