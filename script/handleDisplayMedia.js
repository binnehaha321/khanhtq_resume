const DISPLAYMEDIA = () => {
  const medias = [
    {
      title: "Netcompany Case Study",
      src: "https://www.youtube.com/embed/gh3OQYfbg18?start=439",
      type: "video",
    },
    {
      title: "Greenwich Experience On HTV7",
      src: "https://www.youtube.com/embed/G5exkkhBXGU?start=159",
      type: "video",
    },
    {
      title: "KAO Entertainment",
      src: "../images/activities/kao-show.jpg",
      type: "image",
    },
  ];

  const media = document.querySelector("#media");
  const iframe = document.querySelector("#media iframe");
  const img = document.querySelector("#media img");
  const caption = document.querySelector("#media figcaption");

  const showMedia = (src, title, type) => {
    media.classList.add("active");
    if (type === "video") {
      resetAttribute(img);
      iframe.src = src;
      iframe.style.cssText = `
        width: 80vw;
        height: 90vh;
        visibility: visible;
      `;
    } else {
      resetAttribute(iframe);
      img.src = src;
      img.style.cssText = `
        width: 80vw;
        height: 90vh;
        object-fit: cover;
      `;
    }
    caption.innerText = `Media: ${title}`;
    document.body.append(media);
    document.body.style.overflowY = "hidden";
  };

  const resetAttribute = (media) => {
    media.src = "";
    media.style.cssText = `
        width: 0;
        height: 0;
    `;
  };

  const closeMedia = () => {
    document.body.style.overflowY = "scroll";
    media.classList.remove("active");
    resetAttribute(iframe);
    resetAttribute(img);
    document.body.removeChild(media);
  };

  let isMediaShown = false;
  // show media
  const showMediaButtons = [...document.querySelectorAll(".desc > button")];
  showMediaButtons.map((btn, i) => {
    btn.onclick = () => {
      showMedia(medias[i].src, medias[i].title, medias[i].type);
      isMediaShown = true;
    };
  });

  // close media
  document.querySelector("#media button").onclick = () => {
    closeMedia();
    isMediaShown = false;
  };

  // ESC to close media
  document.body.onkeydown = (e) => {
    isMediaShown && e.key === "Escape" ? closeMedia() : null;
    isMediaShown = false;
  };
};

export default DISPLAYMEDIA;
