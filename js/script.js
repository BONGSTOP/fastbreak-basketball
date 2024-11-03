//NavBar Function
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("#navbar");
  if (window.scrollY > window.screen.height) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-black");
  } else {
    navbar.classList.remove("bg-black");
    navbar.classList.add("bg-transparent");
  }
});

//player swiper
let swiperCards = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
//player read-more
document.querySelectorAll(".read-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const textElement = button.previousElementSibling;
    if (textElement.style.maxHeight && textElement.style.maxHeight !== "50px") {
      textElement.style.maxHeight = "50px";
      button.textContent = "Read More..";
    } else {
      textElement.style.maxHeight = textElement.scrollHeight + "px";
      button.textContent = "Read Less..";
    }
  });
});

//Teams Card Hover Function
document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("teams");
  const sectionTitle = document.getElementById("sectionTitle"); // Get the h2 element
  const cards = document.querySelectorAll(".card-hover");
  const originalBackground = "bg-gray"; // Default background color
  const originalTextColor = "text-black"; // Default text color

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Set the background image from the data attribute
      section.style.backgroundImage = `url(${this.dataset.background})`;

      // Add scale effect to card
      this.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", function () {
      // Remove scale effect
      this.style.transform = "scale(1)";
    });
  });
});
