const NAVBAR = () => {
  const header = document.querySelector("header");
  const parent = document.querySelector(".parent");
  const home = document.querySelector("a[href='#']");

  parent.onscroll = () => {
    header.classList.toggle("stickyTop", parent.scrollTop > 0);
  };

  home.onclick = () => parent.scrollTo(0, 0);
};

export default NAVBAR;
