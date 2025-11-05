document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector("#btn-menu");
  const navHeader = document.querySelector("#nav-header");
  const btnClose = document.querySelector("#btn-close img");
  const submenu = document.querySelector(".submenu");
  const dropdowns = document.querySelectorAll(".dropdown");
  const arrowups = document.querySelectorAll(".arrowup");
  const footer = document.querySelector("footer");
  const logo = document.querySelector(".logo");

  const currentVariant = () =>
    window.matchMedia("(min-width: 1025px)").matches ? "onyx" : "white";

  const toggleSubmenu = (show) => {
    const variant = currentVariant();
    submenu.classList.toggle("submenu-visible", show);

    dropdowns.forEach(d => {
      d.style.display =
        d.dataset.variant === variant && !show ? "initial" : "none";
    });

    arrowups.forEach(a => {
      a.style.display =
        a.dataset.variant === variant && show ? "initial" : "none";
    });
  };

  const resetSubmenu = () => toggleSubmenu(false);

  btnMenu.addEventListener("click", () => {
    navHeader.classList.add("nav-visible");
    document.body.classList.add("no-scroll");
    footer.classList.add("footer-fixed");
    resetSubmenu();
  });

  btnClose.addEventListener("click", () => {
    navHeader.classList.remove("nav-visible");
    document.body.classList.remove("no-scroll");
    footer.classList.remove("footer-fixed");
    resetSubmenu();
  });

  dropdowns.forEach(drop => drop.addEventListener("click", () => toggleSubmenu(true)));
  arrowups.forEach(arrow => arrow.addEventListener("click", () => toggleSubmenu(false)));

  logo.addEventListener("click", () => {
    location.href = "../index.html";
  });
});
