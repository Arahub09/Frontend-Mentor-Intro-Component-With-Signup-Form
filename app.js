form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorTextFirst.innerHTML = "First Name cannot be empty";
    firstWarning.style.display = "block";
  } else {
    firstName.classList.remove('error');
    errorTextFirst.innerHTML = '';
    firstWarning.style.display = "none";
  }

  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    errorTextLast.innerHTML = "Last Name cannot be empty";
    lastWarning.style.display = "block";
  } else {
    lastName.classList.remove('error');
    errorTextLast.innerHTML = '';
    lastWarning.style.display = "none";
  }

  // Check email
  if (emailVal === '') {
    email.classList.add('error');
    errorTextEmail.innerHTML = "Email cannot be empty";
    emailWarning.style.display = "block";
  } else if (!validateEmail(emailVal)) {
    // Invalid email format
    position[2].textContent = "invalid email format";
    position[2].style.display = "inline";
    img[2].style.display = "inline";
    email.classList.add("error");
  } else {
    email.classList.remove('error');
    errorTextEmail.innerHTML = '';
    emailWarning.style.display = "none";
  }

  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    errorTextPass.innerHTML = "Password cannot be empty";
    revealPassword.src = "./images/exclamation-circle-solid.svg";
  } else {
    password.classList.remove('error');
    errorTextPass.innerHTML = '';
    // Change the reveal password icon only if password is not empty
    if (password.type === 'password') {
      revealPassword.src = "./images/eye-solid.svg";
    } else {
      revealPassword.src = "./images/eye-slash-solid.svg";
    }
  }
});

revealPassword.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    revealPassword.src = "./images/eye-solid.svg";
  } else {
    password.type = 'password';
    revealPassword.src = "./images/eye-slash-solid.svg";
  }
});
