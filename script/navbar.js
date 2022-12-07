const NAVBAR = () => {
  const parent = document.querySelector(".parent");
  const header = document.querySelector("header");
  const nav = header.querySelector("ul");
  const navItems = nav.querySelectorAll("li a");
  const home = header.querySelector("a[href='#']");

  parent.onscroll = () => {
    header.classList.toggle("stickyTop", parent.scrollTop > 0);
  };

  const handleActive = (el) => {
    nav.querySelector("li a.active").classList.remove("active");
    el.classList.add("active");
  };

  [...navItems].forEach(
    (item) =>
      (item.onclick = () => {
        handleActive(item);
      })
  );

  home.onclick = () => {
    parent.scrollTo(0, 0);
    handleActive(home);
  };
};

export default NAVBAR;
