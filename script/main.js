import DISPLAYMEDIA from "./handleDisplayVideo.js";
import PREVENTDEFAULT from "./preventDefault.js";
import SLIDERS from "./sliders.js";
import TRUNCATE from "./truncate.js";

window.onload = () => {
  PREVENTDEFAULT();

  DISPLAYMEDIA();

  TRUNCATE();

  SLIDERS();
};
