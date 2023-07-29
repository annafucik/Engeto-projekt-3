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

// About us - img grow/shrink - mouseenter, mouseleave
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");

const enterMouse = (imageNumber) => {
  imageNumber.addEventListener("mouseenter", () => {
    imageNumber.style.transform = "scale(1.1)";
  });
};

const leaveMouse = (imageNumber) => {
  imageNumber.addEventListener("mouseleave", () => {
    imageNumber.style.transform = "scale(1)";
  });
};

enterMouse(image1);
leaveMouse(image1);
enterMouse(image2);
leaveMouse(image2);
enterMouse(image3);
leaveMouse(image3);

// Registration password validation

const getInputContent = (input) => {
  return input.value;
};

const insertContent = (htmlTag, content) => {
  htmlTag.textContent = content;
};

// // add/remove class
const addClass = (htmlTag, className) => {
  htmlTag.classList.add(className);
};
const removeClass = (htmlTag, className) => {
  htmlTag.classList.remove(className);
};

// //cleaner
const htmlTagCleaner = (input1value, input2value, htmlTag) => {
  if (input1value === "" && input2value === "") {
    htmlTag.textContent = "";
  }
};

const passwordImputs = document.querySelectorAll(".password-input");
const paragraph = document.querySelector(".result-text");

passwordImputs.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const password1Value = getInputContent(passwordImputs[0]);
    const password2Value = getInputContent(passwordImputs[1]);

    if (password1Value === password2Value) {
      insertContent(paragraph, "E-maily jsou shodné.");
      addClass(paragraph, "valid");
      removeClass(paragraph, "invalid");
    } else {
      insertContent(paragraph, "E-maily nejsou shodné.");
      removeClass(paragraph, "valid");
      addClass(paragraph, "invalid");
    }
    htmlTagCleaner(password1Value, password2Value, paragraph);
  });
});

// Go back arrow
const arrow = document.querySelector(".go-back");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});

// Dark mode
function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
