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
  bar.onclick = () => {
    sidebar.classList.add("showSidebar");
    body.classList.add("disOverflowY");
  };

  // Close sidebar
  close.onclick = () => {
    sidebar.classList.remove("showSidebar");
    body.classList.remove("disOverflowY");
  };
};

export default SIDEBAR;
