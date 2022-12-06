const SIDEBAR = () => {
  const menu = document.querySelector("header ul");
  const social = document.querySelector("#social");
  const sidebar = document.querySelector("#sidebar");
  const sidebarBody = document.querySelector(".body");
  const sidebarFooter = document.querySelector(".bottom");
  const bar = document.querySelector(".bar");
  const body = document.querySelector("html");
  const close = document.querySelector("#sidebar .close");
  sidebarBody.append(menu);
  sidebarFooter.append(social);

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

  [...menu.children].forEach((item) => (item.onclick = closeSidebar));
};

export default SIDEBAR;
