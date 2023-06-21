// Menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".menu-icon i");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// zvětšení a zmenšení obrázku po najetí myši
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");

image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(1.1)";
});

image1.addEventListener("mouseleave", () => {
  image1.style.transform = "scale(1)";
});

image2.addEventListener("mouseenter", () => {
  image2.style.transform = "scale(1.1)";
});

image2.addEventListener("mouseleave", () => {
  image2.style.transform = "scale(1)";
});

image3.addEventListener("mouseenter", () => {
  image3.style.transform = "scale(1.1)";
});

image3.addEventListener("mouseleave", () => {
  image3.style.transform = "scale(1)";
});

// Validace hesel
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const paragraph = document.querySelector(".result-text");

password1.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1.value === password2.value) {
    paragraph.textContent = "Hesla jsou shodná.";
    paragraph.classList.add("valid");
    paragraph.classList.remove("invalid");
  } else {
    paragraph.textContent = "Hesla nejsou shodná.";
    paragraph.classList.remove("valid");
    paragraph.classList.add("invalid");
  }
  if (password1Value === "" && password2Value === "") {
    paragraph.textContent = "";
  }
});

password2.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1.value === password2.value) {
    paragraph.textContent = "Hesla jsou shodná.";
    paragraph.classList.add("valid");
    paragraph.classList.remove("invalid");
  } else {
    paragraph.textContent = "Hesla nejsou shodná.";
    paragraph.classList.remove("valid");
    paragraph.classList.add("invalid");
  }
  if (password1Value === "" && password2Value === "") {
    paragraph.textContent = "";
  }
});

// Dark mode
function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
