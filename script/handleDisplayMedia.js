import { body, activityTitle } from "./variables.js";

const DISPLAYMEDIA = () => {
  const medias = [
    {
      src: "https://www.youtube.com/embed/gh3OQYfbg18?start=439",
      type: "video",
    },
    {
      src: "https://www.youtube.com/embed/G5exkkhBXGU?start=159",
      type: "video",
    },
    {
      src: "../images/activities/kao-show.jpg",
      type: "image",
    },
  ];

  const media = document.querySelector("#media");
  const iframe = media.querySelector("#media iframe");
  const img = media.querySelector("#media img");
  const caption = media.querySelector("#media figcaption");
  const buttonClose = media.querySelector(".close-media");

  const showMedia = (src, title, type) => {
    media.classList.add("active");
    if (type === "video") {
      resetAttribute(img);
      iframe.src = src;
      iframe.style.cssText = `
        visibility: visible;
      `;
    } else if (type === "image") {
      resetAttribute(iframe);
      img.src = src;
      img.style.cssText = `
        height: initial;
      `
    }
    caption.innerText = `Media: ${title}`;
    body.append(media);
    body.style.overflowY = "hidden";
  };

  const resetAttribute = (media) => {
    media.src = "";
    media.style.cssText = `
        width: 0;
        height: 0;
    `;
  };

  const closeMedia = () => {
    body.style.overflowY = "scroll";
    media.classList.remove("active");
    resetAttribute(iframe);
    resetAttribute(img);
    body.removeChild(media);
  };

  let isMediaShown = false;
  // show media
  const showMediaButtons = [...document.querySelectorAll(".desc > button")];
  showMediaButtons.forEach((btn, i) => {
    btn.onclick = () => {
      showMedia(medias[i].src, activityTitle[i].textContent, medias[i].type);
      isMediaShown = true;
    };
  });

  // close media
  buttonClose.onclick = () => {
    closeMedia();
    isMediaShown = false;
  };

  // ESC to close media
  body.onkeydown = (e) => {
    isMediaShown && e.key === "Escape" ? closeMedia() : null;
    isMediaShown = false;
  };
};

export default DISPLAYMEDIA;
