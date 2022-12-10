import { html, social } from "./variables.js";

const SIDEBAR = () => {
  const menu = document.querySelector(".menu"); // nav container
  const sidebar = document.querySelector("#sidebar");
  const close = sidebar.querySelector(".close");
  const sidebarBody = sidebar.querySelector(".body");
  const sidebarFooter = sidebar.querySelector(".bottom");
  const bar = document.querySelector(".bar");
  const toggleThemeBtn = document.querySelector(".toggle-theme-wrapper");
  const toggleLanguage = document.querySelector("#language");
  sidebarBody.append(menu);
  sidebarBody.append(toggleThemeBtn);
  sidebarBody.append(toggleLanguage);
  sidebarFooter.append(social);

  // Style toggle theme btn
  toggleThemeBtn.style.cssText = `
    display: unset;
    left: 1rem;
    top: 25rem;
    opacity: unset;
    visibility: initial;
  `;

  // Style toggle language btn
  toggleLanguage.style.cssText = `
    display: unset;
    opacity: unset;
    visibility: initial;
  `;

  // Open sidebar
  if (bar) {
    bar.onclick = () => {
      sidebar.classList.add("showSidebar");
      html.classList.add("disOverflowY");
    };
  }

  // Close sidebar
  const closeSidebar = () => {
    sidebar.classList.remove("showSidebar");
    html.classList.remove("disOverflowY");
  };

  if (close) close.onclick = closeSidebar;

  [...menu.children].forEach((item) => {
    item.onclick = () => {
      document
        .querySelector("#sidebar .menu li.active")
        .classList.remove("active");
      item.classList.add("active");
      closeSidebar();
    };
  });
};

export default SIDEBAR;
