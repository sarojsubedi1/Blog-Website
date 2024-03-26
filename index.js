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

// Form validation

const fullname = document.getElementById("name");
const email = document.getElementById("email"); 
const message = document.getElementById("message");
const address = document.getElementById("address")
const form = document.getElementById("form");
const error = document.getElementById("error");

// Onsubmmit handeller
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errorMessages = [];
  if(fullname.value === "" || fullname.value == null){
    errorMessages.push("Name is required");
  }
  if(address.value === "" || address.value == null){
    errorMessages.push("Address is required");
  }
  if(email.value === "" || email.value == null){
    errorMessages.push("Email is required");
  }
  if(message.value === "" || message.value == null){
    errorMessages.push("Message is required");
  }
  if(errorMessages.length > 0){
    error.innerText = errorMessages.join(", ");
  }else{
    error.innerText = "";
    alert("Form Submitted Sucessfully");
  }
});
