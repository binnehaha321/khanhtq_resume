const CONTACTFORM = () => {
  const hireMe = document.querySelector(".hire");
  const cancel = document.querySelector(".cancel");
  const contactForm = document.querySelector("#contact-form");

  hireMe.onclick = () => {
    contactForm.classList.add("active");
    document.body.classList.add("disOverflowY");
  };

  cancel.onclick = () => {
    contactForm.classList.remove("active");
    document.body.classList.remove("disOverflowY");
  };
};

export default CONTACTFORM;
