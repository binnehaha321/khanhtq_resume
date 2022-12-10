let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// html
const html = $("html");

// body
const body = $("body");

// navbar
let navItems = [...$$("header ul li a")];

// resumeDownload
let resume = $("#resume");

// introduction
let state = $(".hero .state");
let fullname = $(".hero .fullname");
let bio = $(".hero .top p");

// hire button
let hireBtn = $(".hire");

// activities
let activitiesTitle = $("#activities h2");
let activityTitle = [...$$(".desc blockquote i")];
let activityDesc = [...$$(".desc p")];
let activityCTA = [...$$(".desc button")];

// certificate
let certificateTitle = $("#certificate h2");

// edu & exp
let eduexpTitle = $("#eduexp h2");
let tableTitle = [...$$("#eduexp table tbody tr:first-child th")]; // title
let tableDuration = [...$$("#eduexp table tbody tr:nth-child(2) th")]; // duration
let tableTitle_ct = [...$$("#eduexp table tbody tr:first-child td")]; // position
let tableDuration_ct = [...$$("#eduexp table tbody tr:nth-child(2) td")]; // time

// contact form
let contactFormHeading = $("#contact-form h4");
let location = $(".visit-card ul li:first-child span");
let name = $("#contact-form form input[name='name']");
let email = $("#contact-form form input[name='email']");
let msg = $("#contact-form form textarea");
let cancelBtn = $("#contact-form form .cancel");
let submitBtn = $("#contact-form form .submit");

// social media
let social = $("#social");

export {
  html,
  body,
  navItems,
  resume,
  state,
  fullname,
  bio,
  hireBtn,
  activitiesTitle,
  activityTitle,
  activityDesc,
  activityCTA,
  certificateTitle,
  eduexpTitle,
  tableTitle,
  tableDuration,
  tableTitle_ct,
  tableDuration_ct,
  contactFormHeading,
  location,
  name,
  email,
  msg,
  cancelBtn,
  submitBtn,
  social,
};
