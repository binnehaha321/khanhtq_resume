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
      src: "../images/kao-show.jpg",
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
      iframe.src = src;
      iframe.style.cssText = `
        width: 80vw;
        height: 90vh;
        visibility: visible;
      `;
    } else {
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

  const closeMedia = () => {
    document.body.style.overflowY = "scroll";
    media.classList.remove("active");
    iframe.src = "";
    iframe.style.cssText = `
        width: 0;
        height: 0;
    `;
    img.src = "";
    img.style.cssText = `
        width: 0;
        height: 0;
    `;
    document.body.removeChild(media);
    document.body.removeChild(img);
  };

  // show media
  const showMediaButtons = [...document.querySelectorAll(".desc > button")];
  showMediaButtons.map((btn, i) => {
    btn.onclick = () => {
      showMedia(medias[i].src, medias[i].title, medias[i].type);
    };
  });

  // close media
  document.querySelector("#media button").onclick = () => {
    closeMedia();
  };
};
export default DISPLAYMEDIA;
