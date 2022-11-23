const handleDisplayVideo = () => {
  const showVideo = (video) => {
    video.style.cssText = `
          visibility: visible;
          opacity: 1;
      `;
    $("body")[0].style.overflowY = "hidden";
  };

  const hideVideo = (video) => {
    video.style.cssText = `
            visibility: inital;
            opacity: inital;
        `;
    $("body")[0].style.overflowY = "unset";
  };

  // Show video in "Activities" section
  $("#activity_netcompany").on("click", () => {
    showVideo($("#video_netcompany")[0]);
  });
  $("#activity_greenwich").on("click", () => {
    showVideo($("#video_greenwich")[0]);
  });

  $("#close-netcompany").on("click", () => {
    hideVideo($("#video_netcompany")[0]);
  });
  $("#close-greenwich").on("click", () => {
    hideVideo($("#video_greenwich")[0]);
  });
};

export default handleDisplayVideo;
