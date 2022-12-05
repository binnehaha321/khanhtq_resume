import CONTACTFORM from "./contactForm.js";
import DISPLAYMEDIA from "./handleDisplayMedia.js";
import PREVENTDEFAULT from "./preventDefault.js";
import SIDEBAR from "./sidebar.js";
import SLIDERS from "./sliders.js";
import TRUNCATE from "./truncate.js";

window.onload = () => {
  PREVENTDEFAULT();
  DISPLAYMEDIA();
  TRUNCATE();
  SLIDERS();
  CONTACTFORM();

  const contact = document.querySelector(".contact");
  const socialHTML = document.querySelector("#social").innerHTML;

  if (document.body.offsetWidth <= 992) {
    contact.innerHTML += socialHTML;
    SIDEBAR();
  }
};
