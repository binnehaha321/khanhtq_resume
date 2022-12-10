import LANGUAGES from "./languages.js";
import { html } from "./variables.js";

const TRUNCATE = () => {
  const descArr = [...document.querySelectorAll(".desc p")];

  const appendSeeMore = () => {
    const more = document.createElement("span");
    more.classList.add("more", "text-primary");
    more.innerHTML = "More";
    return more;
  };

  const truncateString = (str, num) => {
    if (str.length >= num) {
      const strLeftOver = str.slice(0, num);
      return `${strLeftOver}...`;
    } else {
      return str;
    }
  };

  descArr.forEach((desc) => {
    desc.innerText = truncateString(desc.innerText, 200);
    desc.append(appendSeeMore());
  });

  const moreArr = [...document.querySelectorAll(".more")];
  let currentLang = html.getAttribute("data-language");
  moreArr.forEach((tag, index) => {
    tag.onclick = (e) => {
      e.target.parentElement.innerText =
        currentLang === "en"
          ? LANGUAGES.en.activities.activity[index].desc
          : LANGUAGES.vi.activities.activity[index].desc;
    };
  });
};

export default TRUNCATE;
