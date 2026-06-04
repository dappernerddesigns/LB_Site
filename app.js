const date = new Date();
const year = date.getFullYear();

const yearSpan = document.getElementById("year");
yearSpan.innerText = year;

const menuList = document.getElementById("menu-container");
const menuBtn = document.getElementById("menu-btn");
const menuItems = document.getElementsByClassName("menu_item");
let isOpen = false;
const toggleMenu = () => {
  if (!isOpen) {

    menuList.classList.remove("hidden");
    menuList.classList.remove("close-menu");
    menuList.classList.add("open-menu");

    isOpen = true;
  } else {
  
    menuList.classList.remove("open-menu");
    menuList.classList.add("close-menu");

   
    menuList.addEventListener(
      "animationend",
      () => {
        menuList.classList.add("hidden");
        menuList.classList.remove("close-menu");
      },
      { once: true },
    );

    isOpen = false;
  }
};
menuBtn.addEventListener("click", toggleMenu);

for (const item of menuItems) {
  item.addEventListener("click", () => {
    if (!isOpen) return;
    toggleMenu();
  });
}

const fbContainer = document.getElementById("facebook-container");

addEventListener("resize", () => {
  if (window.innerWidth <= 500) {
    fbContainer.width = "380";
  }
});