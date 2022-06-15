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
    if (response.ok){
        return response
    }
  } catch (err) {
    console.log(err);
    return err
  }

  //   .then((res) => {
  //     console.log(res);
  //     if (res.ok) {
  //       //...do something
  //     response = res
  //     } else {
  //       res.json().then((res) => {
  //         let errMsg = "Authentication Failed";
  //         console.log(res);
  //         if (res.error.message) {
  //           errMsg = res.error.message;
  //         }
  //         //...handle error
  //         response = errMsg;
  //       });
  //     }
  //  });
//   console.log(response);
//   return response;

  //create new auth instance
  // createSendToken(newUser, 201, req, res);
};
