const stdname = document.querySelector("#name");
const stdid = document.querySelector("#id");

function onFormSubmit() {
  let isStdnameValid = checkStdname(),
    isStdIdValid = checkStdId();

  let isFormValid = isStdnameValid && isStdIdValid;
  if (isFormValid) {
  }
}
// std ID
const isStdIdValid = (stdid) => {
  const re = /^([SOC])+([0-9])+$/;
  return re.test(stdid);
};
function checkStdId() {
  let valid = false;
  const mini = 11;
  const studentId = stdid.value.trim();
  if (!idIsRequired(studentId)) {
    showError(stdid, "StudentID cannot be blank.");
  } else if (studentId.length < mini) {
    showError(stdid, `Student ID shoud have atleast ${mini} characters.`);
  }else if (studentId.length > mini) {
    showError(stdid, `Student ID shoud have atleast ${mini} characters.`);
  } 
  else if (!isStdIdValid(studentId)) {
    showError(stdid, "Student ID should have 'SOC' followed by the 8 digit id");
  } else {
    showSuccess(stdid);
    valid = true;
  }
  return valid;
}
let idIsRequired = (value) => (value === "" ? false : true);

// STD name
const isStdnameValid = (stdname) => {
  const no = /^(([a-z A-Z])+)$/;
  return no.test(stdname);
};

function checkStdname() {
  let valid = false;
  const min = 3,
    max = 25;
  const username = stdname.value.trim();
  if (!isRequired(username)) {
    showError(stdname, "Student name cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      stdname,
      `Name should have character  between ${min} and ${max} .`
    );
  } else if (!isStdnameValid(username)) {
    showError(stdname, "Invalid value! Type again!");
  } else {
    showSuccess(stdname);
    valid = true;
  }
  return valid;
}

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

let showError = (input, message) => {
  let formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  formField.querySelector("small").textContent = "";
};
