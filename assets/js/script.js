
function sendMail(contactForm) {
  emailjs
    .send("gmail", "copenhagen", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      your_query: contactForm.query.value,
    })
    .then(
      function () {
        document.getElementById("form-reset").reset();        
      }, 
    );
  return false;
}
