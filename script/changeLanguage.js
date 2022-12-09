import LANGUAGES from "./languages.js";
import TRUNCATE from "./truncate.js";
import * as vrb from "./variables.js";

const CHANGE_LANGUAGES = () => {
  const language = document.getElementById("language");
  const enBtn = language.querySelector("#lang-en");
  const viBtn = language.querySelector("#lang-vi");

  const transToEn = (en_text) => {
    return en_text;
  };
  const transToVi = (vi_text) => {
    return vi_text;
  };

  // Change to English
  let en_access = LANGUAGES.en;
  enBtn.onclick = () => {
    // change data-language on html
    vrb.html.setAttribute("data-language", "en");
    // navItems
    vrb.navItems.forEach((item, index) => {
      item.textContent = en_access.navItems[index];
    });
    // resumeDownload
    vrb.resume.textContent = transToEn(en_access.resumeDownload);
    // introduction
    vrb.state.textContent = transToEn(en_access.introduction.state);
    vrb.fullname.textContent = transToEn(en_access.introduction.fullname);
    vrb.bio.textContent = transToEn(en_access.introduction.bio);
    //  hire
    vrb.hireBtn.textContent = transToEn(en_access.hireBtn);
    // activities
    vrb.activitiesTitle.textContent = transToEn(en_access.activities.title); // title
    vrb.activityTitle.forEach((item, index) => {
      item.textContent = `"${en_access.activities.activity[index].subtitle}"`; // subtitle
    });
    vrb.activityDesc.forEach((item, index) => {
      item.textContent = en_access.activities.activity[index].desc; // desc
    });
    TRUNCATE();
    vrb.activityCTA.forEach((item, index) => {
      item.textContent = en_access.activities.activity[index].showMediaBtn; // show media btn
    });
    // certificate
    vrb.certificateTitle.textContent = en_access.certificates.title;
    // edu & exp
    vrb.eduexpTitle.textContent = en_access.eduexp.title;
    vrb.tableTitle.forEach(
      (item) => (item.textContent = en_access.eduexp.tableTitle)
    );
    vrb.tableDuration.forEach(
      (item) => (item.textContent = en_access.eduexp.tableDuration)
    );
    vrb.tableTitle_ct.forEach(
      (item, index) => (item.textContent = en_access.eduexp.table[index].title)
    );
    vrb.tableDuration_ct.forEach(
      (item, index) =>
        (item.textContent = en_access.eduexp.table[index].duration)
    );
    // contact form
    vrb.contactFormHeading.textContent = en_access.contactForm.title;
    vrb.location.textContent = en_access.contactForm.location;
    vrb.cancelBtn.textContent = en_access.contactForm.cancelBtn;
    vrb.submitBtn.textContent = en_access.contactForm.submitBtn;
    vrb.name.setAttribute("placeholder", en_access.contactForm.fullname);
    vrb.email.setAttribute("placeholder", en_access.contactForm.email);
    vrb.msg.setAttribute("placeholder", en_access.contactForm.msg);
  };

  // Change to Vietnamese
  let vi_access = LANGUAGES.vi;
  viBtn.onclick = () => {
    // change data-language on html
    vrb.html.setAttribute("data-language", "vi");
    // navItems
    vrb.navItems.forEach((item, index) => {
      item.textContent = vi_access.navItems[index];
    });
    // resumeDownload
    vrb.resume.textContent = transToVi(vi_access.resumeDownload);
    // introduction
    vrb.state.textContent = transToVi(vi_access.introduction.state);
    vrb.fullname.textContent = transToVi(vi_access.introduction.fullname);
    vrb.bio.textContent = transToVi(vi_access.introduction.bio);
    // hire
    vrb.hireBtn.textContent = transToVi(vi_access.hireBtn);
    // activities
    vrb.activitiesTitle.textContent = transToVi(vi_access.activities.title); // title
    vrb.activityTitle.forEach((item, index) => {
      item.textContent = `"${vi_access.activities.activity[index].subtitle}"`; // subtitle
    });
    vrb.activityDesc.forEach((item, index) => {
      item.textContent = vi_access.activities.activity[index].desc; // desc
    });
    TRUNCATE();
    vrb.activityCTA.forEach((item, index) => {
      item.textContent = vi_access.activities.activity[index].showMediaBtn; // show media btn
    });
    // certificate
    vrb.certificateTitle.textContent = vi_access.certificates.title;
    // edu & exp
    vrb.eduexpTitle.textContent = vi_access.eduexp.title;
    vrb.tableTitle.forEach(
      (item) => (item.textContent = vi_access.eduexp.tableTitle)
    );
    vrb.tableDuration.forEach(
      (item) => (item.textContent = vi_access.eduexp.tableDuration)
    );
    vrb.tableTitle_ct.forEach(
      (item, index) => (item.textContent = vi_access.eduexp.table[index].title)
    );
    vrb.tableDuration_ct.forEach(
      (item, index) =>
        (item.textContent = vi_access.eduexp.table[index].duration)
    );
    // contact form
    vrb.contactFormHeading.textContent = vi_access.contactForm.title;
    vrb.location.textContent = vi_access.contactForm.location;
    vrb.cancelBtn.textContent = vi_access.contactForm.cancelBtn;
    vrb.submitBtn.textContent = vi_access.contactForm.submitBtn;
    vrb.name.setAttribute("placeholder", vi_access.contactForm.fullname);
    vrb.email.setAttribute("placeholder", vi_access.contactForm.email);
    vrb.msg.setAttribute("placeholder", vi_access.contactForm.msg);
  };
};

export default CHANGE_LANGUAGES;
