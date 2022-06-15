// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_PROJECT_KEY;
console.log(FIREBASE_KEY);
// const EMAIL_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY

export const signupUser = async (user) => {
  const { email, password, passwordConfirm } = user;
  console.log(user);

  //build new user object
  const newUser = {
    email,
    password,
    passwordConfirm,
  };
  fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    console.log(res);
    if (res.ok) {
      //...do something
    } else {
      res.json().then((res) => console.log(res));
    }
  });

  //create new auth instance
  // createSendToken(newUser, 201, req, res);
};
