import { html, body } from "./variables.js";

const WELCOME = () => {
  const welcome = document.querySelector(".welcome");

  setTimeout(() => {
    welcome.style.cssText = `
      visibility: hidden;
      opacity: 0;
      `;
    html.style.cursor = "initial";
    body.style.cursor = "initial";
  }, 4000);
};

export default WELCOME;
