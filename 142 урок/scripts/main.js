const openBtn = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".body");

const closeMenu = () => {
  burgerMenu.classList.remove("body--opened-menu");
};

openBtn.addEventListener("click", () => {
  burgerMenu.classList.add("body--opened-menu");
});

burgerMenu.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.classList.contains("burger-icon") ||
    target.classList.contains("nav__link")
  ) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.code == "Escape" &&
    burgerMenu.classList.contains("body--opened-menu")
  ) {
    closeMenu();
  }
});
// ==============modal===================
const openModal = document.querySelector(".gift__img-button");
const modalWindow = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close-btn");
const modalFormBtn = document.querySelector(".modal .button");

const closeModal = () => {
  console.log("Закрываю модалку");
  document.body.classList.remove("body-modal--opened");
};

openModal.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Модалка открыта");
  document.body.classList.add("body-modal--opened");
});

if (closeBtn) {
  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal();
  });
}

if (modalFormBtn) {
  modalFormBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal();
  });
}

modalWindow.addEventListener("click", (event) => {
  if (event.target === modalWindow) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.code == "Escape" &&
    document.body.classList.contains("body-modal--opened")
  ) {
    closeModal();
  }
});
// =============tabs=======================================

const tabContorls = document.querySelector(".tab-controls");

tabContorls.addEventListener("click", (event) => {
  const target = event.target.closest(".tab-controls_link");

  if (!target) return;
  event.preventDefault();
  if (target.classList.contains("tab-controls_link--active")) return;

  const targetID = target.getAttribute("href");

  document
    .querySelector(".tab-content--show")
    .classList.remove("tab-content--show");
  document.querySelector(targetID).classList.add("tab-content--show");

  const activeTab = document.querySelector(".tab-controls_link--active");
  if (activeTab) {
    activeTab.classList.remove("tab-controls_link--active");
  }
  target.classList.add("tab-controls_link--active");
});

// Accordion

const accordionLists = document.querySelectorAll(".accordion-list");

accordionLists.forEach((el) => {
  el.addEventListener("click", (e) => {
    const accordionList = e.currentTarget;
    const accordionOpenedItem = accordionList.querySelector(
      ".accordion-list__item--opened"
    );
    const accordionOpenedContent = accordionList.querySelector(
      ".accordion-list__item--opened .accordion-list__content"
    );

    const accordionControl = e.target.closest(".accordion-list__control");
    if (!accordionControl) return;
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
      accordionOpenedItem.classList.remove("accordion-list__item--opened");
      accordionOpenedContent.style.maxHeight = null;
    }
    accordionItem.classList.toggle("accordion-list__item--opened");

    if (accordionItem.classList.contains("accordion-list__item--opened")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});
