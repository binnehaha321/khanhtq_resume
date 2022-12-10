import CONTACTFORM from "./contactForm.js";
import DISPLAYMEDIA from "./handleDisplayMedia.js";
import CHANGE_LANGUAGES from "./changeLanguage.js";
import NAVBAR from "./navbar.js";
import PREVENTDEFAULT from "./preventDefault.js";
import SIDEBAR from "./sidebar.js";
import { SLIDERS, HANDLESLIDERS } from "./sliders.js";
import TOGGLETHEME from "./toggleTheme.js";
import TRUNCATE from "./truncate.js";
import { social } from "./variables.js";
import WELCOME from "./welcome.js";

window.onload = () => {
  PREVENTDEFAULT();
  WELCOME();
  NAVBAR();
  TOGGLETHEME();
  DISPLAYMEDIA();
  TRUNCATE();
  SLIDERS();
  CONTACTFORM();
  CHANGE_LANGUAGES();

  const contact = document.querySelector(".contact");
  const socialHTML = social.innerHTML;

  if (window.matchMedia("(max-width: 992px)").matches) {
    contact.innerHTML += socialHTML;
    SIDEBAR();
  } else if (window.matchMedia("(min-width: 1024px)").matches) {
    HANDLESLIDERS();
  }
};
