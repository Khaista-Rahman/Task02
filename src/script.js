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

const bgContainer = document.getElementById("cont1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const images = ["url(images/tunnel1.jpg)", "url(images/tunnel2.jpg)"];

let currentIndex = 0;
let interval;

function changeBackground(index) {
  currentIndex = index;
  bgContainer.style.backgroundImage = images[currentIndex];

  if (currentIndex === 0) {
    btn1.classList.add("active");
    btn2.classList.remove("active");
  } else {
    btn1.classList.remove("active");
    btn2.classList.add("active");
  }
}

function startAutoChange() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground(currentIndex);
  }, 4000);
}

function stopAutoChange() {
  clearInterval(interval);
}

btn1.addEventListener("click", function () {
  stopAutoChange();
  changeBackground(0);
  startAutoChange();
  if (condition) {
    allcontent2.style.display = "none";
    allcontent1.style.display = "block";
    condition = false;
  } else {
    allcontent2.style.display = "block";
    allcontent1.style.display = "none";
    condition = true;
  }
});

btn2.addEventListener("click", function () {
  stopAutoChange();
  changeBackground(1);
  startAutoChange();
  if (condition) {
    allcontent2.style.display = "none";
    allcontent1.style.display = "block";
    condition = false;
  } else {
    allcontent2.style.display = "block";
    allcontent1.style.display = "none";
    condition = true;
  }
});

startAutoChange();

let startNumber = 1;
let endNumber = 400;
let duration = 2000;

let incrementTime = Math.round(duration / endNumber);

let currentNumber = startNumber;
let counter = document.getElementById("count");

function updateCounter() {
  if (currentNumber <= endNumber) {
    counter.innerText = currentNumber;
    currentNumber++;
  } else {
    clearInterval(counterInterval);
  }
}

let counterInterval = setInterval(updateCounter, incrementTime);

let allcontent1 = document.querySelector("#allcountContent");
let allcontent2 = document.querySelector("#allcountContent2");
let condition = true;
setInterval(() => {
  if (condition) {
    allcontent2.style.display = "none";
    allcontent1.style.display = "block";
    condition = false;
  } else {
    allcontent2.style.display = "block";
    allcontent1.style.display = "none";
    condition = true;
  }
}, 4000);

let activeButton = null;

function slideTo(index) {
  const slider = document.querySelector(".slider");
  const slideWidth = document.querySelector(".w-96").clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;

  const buttons = document.querySelectorAll("#sliderBtn button");

  if (activeButton !== null) {
    activeButton.style.backgroundColor = "white";
  }

  buttons[index].style.backgroundColor = "black";

  activeButton = buttons[index];
}

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

const largeScreen = document.querySelector("#desktop");
largeScreen.addEventListener("click", () => {
  const view = document.querySelector("body");
  view.style.width = "100%";
});

const mediumScreen = document.querySelector("#tablet");
mediumScreen.addEventListener("click", () => {
  const view = document.querySelector("body");
  view.style.width = "768px";
});

const mobileScreen = document.querySelector("#mobile");
mobileScreen.addEventListener("click", () => {
  const view = document.querySelector("body");
  view.style.width = "640px";
});

const hidenave = document.querySelector("#cross");
hidenave.addEventListener("click", () => {
  const nav = document.querySelector("#adjustNav");
  nav.style.display = "none";
});
