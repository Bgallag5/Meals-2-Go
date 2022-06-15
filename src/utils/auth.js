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
  // const newUser = {
  //   email,
  //   password,
  //   passwordConfirm,
  // };

  try {
    const response = await fetch(
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
    );
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const loginUser = async (user) => {
  const { email, password } = user;
  console.log(user);

  //build new user object
  // const newUser = {
  //   email,
  //   password,
  // };
  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`,
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
    );
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response)
    }
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
