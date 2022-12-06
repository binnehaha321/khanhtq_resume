const TOGGLETHEME = () => {
  const html = document.querySelector("html");
  document.querySelector(".letter-name span").onclick = () => {
    if (html.getAttribute(["data-theme"]) === "light") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };
};

export default TOGGLETHEME;
