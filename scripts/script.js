const primaryNav = document.querySelector(".mobile-nav-bar");
const navToggle = document.querySelector(".page-logo");

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-ver");

  if (visibility === "false") {
    primaryNav.setAttribute('data-ver', true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-ver', false);
    navToggle.setAttribute("aria-expanded", false);
  }

  console.log(visibility);
})