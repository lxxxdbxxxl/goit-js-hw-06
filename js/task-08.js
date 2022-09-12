const formInputEl = document.querySelector(".login-form");
formInputEl.addEventListener("submit", tergetInputHandler);

function tergetInputHandler(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("Fill in all fields, please");
  }

  const userLoginData = {
    email: email.value,
    password: password.value,
  };

  console.log(userLoginData);
  event.currentTarget.reset();
}
