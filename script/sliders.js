const slider = document.querySelector(".certificates");
const SLIDERS = () => {
  const certificates = [
    {
      organization: "Coursera",
      images: [
        "../images/certificate/coursera.png",
        "../images/certificate/coursera2.png",
        "../images/certificate/coursera3.png",
      ],
    },
    {
      organization: "KDU",
      images: ["../images/certificate/kdu.png"],
    },
    {
      organization: "MPU",
      images: [
        "../images/certificate/mpu3.png",
        "../images/certificate/mpu4.png",
        "../images/certificate/mpu.png",
        "../images/certificate/mpu2.png",
      ],
    },
  ];

  certificates.map((certi) => {
    const images = certi.images;
    images.map((img, i) => {
      slider.innerHTML += `<li><img loading="lazy" src="${img}" alt="${
        certi.organization + "-" + i
      }" /><figcaption class="text-center text-light fw-bold mt-1">${
        certi.organization
      }</figcaption></li>`;
    });
  });
};

const HANDLESLIDERS = () => {
  let isDown = false;
  let startX;
  let scrollLeft;
  const end = () => {
    isDown = false;
  };
  const start = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = x - startX;
    slider.scrollLeft = scrollLeft - dist;
  };
  (() => {
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);
    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);
    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
  })();
};
export { SLIDERS, HANDLESLIDERS };
