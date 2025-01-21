//Modal Window
const orderServiceAndModalBtn = document.querySelector(".order-service-btn");
const modal = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".close-btn");

const closeModalWindow = () => {
  modal.classList.remove("is-open");
};

const openModalWindow = () => {
  modal.classList.add("is-open");
};

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalWindow();
  }
});

closeModalBtn.addEventListener("click", closeModalWindow);
orderServiceAndModalBtn.addEventListener("click", openModalWindow);
//End Modal Window
//Mobile Menu
const mobileMenu = document.querySelector(".mobile-menu");
const openMobileMenuBtn = document.querySelector(".menu-head-btn");
const closeMobileMenuBtn = document.querySelector(".mobile-close-btn");

const toOpenMobileMenu = () => {
  mobileMenu.classList.add("is-open");
};
const toCloseMobileMenu = () => {
  mobileMenu.classList.remove("is-open");
};

closeMobileMenuBtn.addEventListener("click", toCloseMobileMenu);
openMobileMenuBtn.addEventListener("click", toOpenMobileMenu);
