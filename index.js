let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
const path = location.pathname;

const menuLinks = document.querySelectorAll("#menuList a");

menuLinks.forEach((link) => {
  if (link.href.endsWith(path)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
