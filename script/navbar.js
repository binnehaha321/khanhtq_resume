const NAVBAR = () => {
  const parent = document.querySelector(".parent");
  const header = document.querySelector("header");
  const menu = document.querySelector(".menu");

  // Sticky header when scroll down
  parent.onscroll = () => {
    header.classList.toggle("stickyTop", parent.scrollTop > 0);
  };

  const handleActive = (el) => {
    menu.querySelector("li.active").classList.remove("active");
    el.classList.add("active");
  };

  [...menu.children].forEach((item) => {
    item.onclick = () => handleActive(item);
  });
};

export default NAVBAR;
