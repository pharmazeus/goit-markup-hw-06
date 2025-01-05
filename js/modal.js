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
