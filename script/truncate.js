// // Truncate description text
const TRUNCATE = () => {
  // Desc list
  const desc = {
    netcompany:
      "During the Netcompany visit on April 2021, we received a case study of Hamber company losing customers a year to year. We had an hour to group work to find solutions to this. My teams had been efforts to brainstorm and come up with many ideas such as improving UI, enhancing the search tool's effectiveness, analyzing users' behavior, integrating AI tech, etc. I was in charge of analyzing charts and modelizing. This is one of the most fantastic realistic experiences.",

    greenwich:
      "I was honored to be invited to make a reportage about my university. I have earned lots of experience and skills through overseas trips, outside activities, and presentation days. Moreover, the thing that wasn't lacking was my confidence, I felt it strongly improved day to day.",

    kao: "I played the role of music director at KAO Entertainment. KAO Entertainment is a start-up of my friend, he is talented and passionate. We had together a mini music show that raise funds for charity on Christmas eve 2021.",
  };

  const descArr = [...document.querySelectorAll(".desc p")];

  const appendSeeMore = () => {
    const more = document.createElement("a");
    more.classList.add("more");
    more.innerHTML = "More";
    more.href = "javascript:void(0)";
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

  descArr.map((desc) => {
    desc.innerText = truncateString(desc.innerText, 200);
    desc.append(appendSeeMore());
  });

  const moreArr = [...document.querySelectorAll("a.more")];
  moreArr.map((tag) => {
    tag.onclick = (e) => {
      switch (e.target.parentElement.className) {
        case "desc-net":
          e.target.parentElement.innerText = desc.netcompany;
          break;
        case "desc-gw":
          e.target.parentElement.innerText = desc.greenwich;
          break;
        case "desc-kao":
          e.target.parentElement.innerText = desc.kao;
          break;

        default:
          break;
      }
    };
  });
};

export default TRUNCATE;
