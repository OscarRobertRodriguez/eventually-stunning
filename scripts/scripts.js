const button = document.querySelector(".signUpBtn");
const form = document.querySelector("#form1");
const message = document.querySelector(".form-message");
const email = document.querySelector("#emailField");

button.addEventListener("click", (e) => {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    message.classList.add("displayNone");
  }
});

form.addEventListener("submit", (e) => {
  const emailValue = email.value.trim();
  e.preventDefault();

  if (ValidateEmail(emailValue)) {
    email.value = "";
    message.classList.remove("displayNone");
  }
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
