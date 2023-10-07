const passConfrimInput = document.querySelector("#password-confirm");
const passInput = document.querySelector("#password");

passConfrimInput.addEventListener("blur", checkPasswordEquality);
passInput.addEventListener("blur", checkPasswordEquality);

function checkPasswordEquality() {
  const password = passInput.value;
  const passwordConfrim = passConfrimInput.value;

  if (!passwordConfrim) {
    passConfrimInput.classList.remove("error");
  } else if (password !== passwordConfrim) {
    passConfrimInput.classList.add("error");
  } else if (password === passwordConfrim) {
    passConfrimInput.classList.remove("error");
  }
}
