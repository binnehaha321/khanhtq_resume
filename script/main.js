import CONTACTFORM from "./contactForm.js";
import DISPLAYMEDIA from "./handleDisplayMedia.js";
import LANGUAGES from "./languages.js";
import NAVBAR from "./navbar.js";
import PREVENTDEFAULT from "./preventDefault.js";
import SIDEBAR from "./sidebar.js";
import { SLIDERS, HANDLESLIDERS } from "./sliders.js";
import TOGGLETHEME from "./toggleTheme.js";
import TRUNCATE from "./truncate.js";

window.onload = () => {
  PREVENTDEFAULT();
  NAVBAR();
  TOGGLETHEME();
  DISPLAYMEDIA();
  TRUNCATE();
  SLIDERS();
  CONTACTFORM();
  LANGUAGES();

  const contact = document.querySelector(".contact");
  const socialHTML = document.querySelector("#social").innerHTML;
  const screenWidth = document.body.offsetWidth;
  if (screenWidth <= 992) {
    contact.innerHTML += socialHTML;
    SIDEBAR();
  }

  if (screenWidth >= 1024) {
    HANDLESLIDERS();
  }
};
