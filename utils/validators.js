// email validator

const { sign } = require("jsonwebtoken");

const email = "shaikhmuhid165@gmail.com";
const isEmail = (email) => {
  const myEmailRegx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (email.match(myEmailRegx)) return true;
  return false;
};

// check for empty field

const isEmpty = (value) => {
  if (value.trim() === "") return true;
  return false;
};

// signup validator

const signupValidator = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = " must not be empty ";
  }
  if (!isEmail(data.email)) {
    errors.email = " must be a valid email";
  }
  if (isEmpty(data.password)) {
    errors.password = "password must not be empty";
  }
  if (data.password.length < 6) {
    errors.password = "Password is shorter than mininum allowed length (6)";
  }

  return {
    errors,
    valid: Object.keys(errors).length ? false : true,
  };
};

const data = {
  email: "shaikhmuhid165@gmail.com",
  password: "123455",
};


// login validator

const loginValidator = () => {
    const errors = {};
    
    if(isEmpty(data.email)){
        errors.email = "email must not be empty "
    }
    if(!isEmail(data.email)){
        errors.password = "must be a valid email "
    }
    if(isEmpty(data.password)){
        errors.password = "password must not be empty!"
    }
    return {
        errors,
        valid: Object.keys(errors).length ? false : true
    }
}

// console.log(loginValidator(data));


