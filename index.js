document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navbar = document.querySelector(".navbar");
  const closeNavBar = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");
  const burger = document.getElementById("burger");
  const headerLogo = document.querySelector(".headerLogo");
  const secondLogo = document.getElementById("secondLogo");
  const btnIndicator = document.querySelector(".btn_indicator");
  const btnIndicatorRes = document.querySelector(".btn_indicator-res");
  const btnRes = document.querySelector(".btn-res");
  const newsBorder = document.getElementById("news");
  const line1 = document.querySelector(".h");
  const line2 = document.querySelector(".line2");
  const mealBorder = document.querySelector(".meal");
  const borderShow = document.querySelector(".show_sec2");
  const closeBtnbg = document.getElementById("close-btn");

  const body = document.querySelector("body");
  const btn = document.querySelector(".btn");

  function changeIcon() {
    let computedStyles = window.getComputedStyle(
      document.getElementById("moon")
    );
    let isMoonVisible = computedStyles.getPropertyValue("display") !== "none";
    let isSunVisible = computedStyles.getPropertyValue("display") === "none";

    if (isMoonVisible) {
      btnIndicator.style.transform = "translateX(100%)";
      btnIndicatorRes.style.transform = "translateX(100%)";
      document.getElementById("moon").style.display = "none";
      document.getElementById("sun").style.display = "block";
      document.getElementById("moon-res").style.display = "none";
      document.getElementById("sun-res").style.display = "block";
    } else if (isSunVisible) {
      btnIndicator.style.transform = "translateX(0%)";
      btnIndicatorRes.style.transform = "translateX(0%)";
      document.getElementById("moon").style.display = "block";
      document.getElementById("sun").style.display = "none";
      document.getElementById("moon-res").style.display = "block";
      document.getElementById("sun-res").style.display = "none";
    }
  }

  btnRes.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    navbar.classList.toggle("darkmode");
    burgerMenu.classList.toggle("darkmode");
    burger.classList.toggle("darkmode");
    firstLogo.classList.toggle("darkmode");
    headerLogo.classList.toggle("darkmode");
    selectRes.classList.toggle("darkmode");
    btnRes.classList.toggle("darkmode");
    newsBorder.classList.toggle("darkmode");
    line1.classList.toggle("darkmode");
    line2.classList.toggle("darkmode");
    mealBorder.classList.toggle("darkmode");
    borderShow.classList.toggle("darkmode");
    closeBtnbg.classList.toggle("darkmode");

    changeIcon();
  });

  btn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    navbar.classList.toggle("darkmode");
    burgerMenu.classList.toggle("darkmode");
    burger.classList.toggle("darkmode");
    firstLogo.classList.toggle("darkmode");
    headerLogo.classList.toggle("darkmode");
    btnRes.classList.toggle("darkmode");
    selectRes.classList.toggle("darkmode");
    newsBorder.classList.toggle("darkmode");
    line1.classList.toggle("darkmode");
    line2.classList.toggle("darkmode");
    mealBorder.classList.toggle("darkmode");
    borderShow.classList.toggle("darkmode");
    closeBtnbg.classList.toggle("darkmode");

    changeIcon();
  });

  const navLinks = document.querySelectorAll(".nav_links a");

  navLinks[0].classList.add("pinkborder");

  function handleNavLinkClick(event) {
    navLinks.forEach((link) => link.classList.remove("pinkborder"));
    event.target.classList.add("pinkborder");
  }

  document
    .querySelector(".nav_links")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        handleNavLinkClick(event);
      }
    });

  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const lines = document.querySelectorAll(".testimonial-lines .line");

  function changeLine(index) {
    setTimeout(() => {
      lines.forEach((line) => line.classList.remove("clicked"));
      lines[index].classList.add("clicked");
    }, 300);
  }

  const slideContainer = document.getElementById("slideContainer");
  const slideOne = document.getElementById("slideOne");
  const slideTwo = document.getElementById("slideTwo");

  function scroll(direction) {
    console.log("tuk");
    if (direction == "left") {
      console.log("left");
      slideOne.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      changeLine(0);
    } else if (direction == "right") {
      slideTwo.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "nearest",
      });
      changeLine(1);
    }
  }

  nextButton.addEventListener("click", () => {
    scroll("right");
  });
  prevButton.addEventListener("click", () => {
    scroll("left");
  });

  navbar.style.display = "none";

  const closeNav = () => {
    if (navbar.style.display == "none") {
      navbar.style.display = "flex";
      overlay.style.display = "flex";
      firstLogo.style.display = "none";
      console.log(navbar.style.display);
    } else {
      console.log(navbar.style.display);
      overlay.style.display = "none";
      navbar.style.display = "none";
      firstLogo.style.display = "flex";
    }
  };

  burgerMenu.addEventListener("click", () => {
    closeNav();
  });

  closeNavBar.addEventListener("click", () => {
    closeNav();
  });

  overlay.addEventListener("click", () => {
    closeNav();
  });

  window.addEventListener("resize", function () {
    if (
      (window.innerWidth === screen.width &&
        window.innerHeight === screen.height) ||
      (window.innerHeight > 600 && window.innerWidth > 760)
    ) {
      navbar.style.display = "none";
    } else {
    }
  });
});
