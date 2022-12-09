const SIDEBAR = () => {
  const menu = document.querySelector("header ul"); // nav items
  const social = document.querySelector("#social"); // social medias
  const sidebar = document.querySelector("#sidebar");
  const sidebarBody = document.querySelector(".body");
  const sidebarFooter = document.querySelector(".bottom");
  const bar = document.querySelector(".bar");
  const body = document.querySelector("html");
  const close = document.querySelector("#sidebar .close");
  const toggleThemeBtn = document.querySelector(".toggle-theme-wrapper");
  const toggleLanguage = document.querySelector("#language");
  sidebarBody.append(menu);
  sidebarBody.append(toggleThemeBtn);
  sidebarBody.querySelector("ul").append(toggleLanguage);
  sidebarFooter.append(social);

  // Style toggle theme btn
  toggleThemeBtn.style.cssText = `
    display: unset;
    left: 1rem;
    top: 70%;
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
      body.classList.add("disOverflowY");
    };
  }

  // Close sidebar
  const closeSidebar = () => {
    sidebar.classList.remove("showSidebar");
    body.classList.remove("disOverflowY");
  };

  close.onclick = closeSidebar;

  if (menu) {
    [...menu.children]
      .slice(0, -1)
      .forEach((item) => (item.onclick = closeSidebar));
  }
};

export default SIDEBAR;
