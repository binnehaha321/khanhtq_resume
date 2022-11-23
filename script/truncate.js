// Truncate description text
const TRUNCATE = () => {
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const fullString = (fullStr) => {
    return fullStr;
  };

  let desc_netcompany = $(".desc_netcompany")[0].innerText;
  let desc_greenwich = $(".desc_greenwich")[0].innerText;
  [...$(".desc")].map((text) => {
    const seeMore = document.createElement("a");
    seeMore.innerHTML = "More";
    seeMore.href = "javascript:void(0)";

    // Initial
    text.innerText = truncateString(text.innerText, 200);
    text.append(seeMore);

    // When click on see more
    seeMore.onclick = (e) => {
      let description = e.target.parentElement;
      if (description.getAttribute("class").includes("desc_netcompany")) {
        description.innerText = fullString(desc_netcompany);
      } else if (description.getAttribute("class").includes("desc_greenwich")) {
        description.innerText = fullString(desc_greenwich);
      }
    };
  });
};

export default TRUNCATE;
