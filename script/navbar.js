const NAVBAR = () => {
  const parent = document.querySelector(".parent");
  const header = document.querySelector("header");
  const menu = document.querySelector(".menu");

  // Sticky header when scroll down
  parent.onscroll = () => {
    let scrollPosition = parent.scrollTop;
    header.classList.toggle("stickyTop", scrollPosition > 0);

    if (window.matchMedia("(min-width: 992)").matches) {
      if (scrollPosition >= 0 && scrollPosition < 673) {
        handleActive(menu.querySelector("li:first-child"));
      } else if (scrollPosition >= 673 && scrollPosition < 1347) {
        handleActive(menu.querySelector("li:nth-child(2)"));
      } else if (scrollPosition >= 1347 && scrollPosition < 2020) {
        handleActive(menu.querySelector("li:nth-child(3)"));
      } else if (scrollPosition >= 2020) {
        handleActive(menu.querySelector("li:last-child"));
      }
    }
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
