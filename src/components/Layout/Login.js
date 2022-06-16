import React, { useState, useContext, useRef } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import {GlobalContext} from '../../store/GlobalStore';

import Spinner from "../UI/Spinner";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [authMsg, setAuthMsg] = useState("Invalid");
  const {login, user} = useContext(GlobalContext)
  // const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const authMsgRef = useRef();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleFormSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    const { email, password } = values;
    let user = {
      email,
      password,
    };
    const response = await loginUser(user);
    console.log(response);

    if (response.idToken) {
      console.log("LOGGED IN!!!!!!");
      //...dispatch setUser
      setLoading(false);
      let currentUser = {
        email: response.email,
        idToken: response.idToken,
        expires: response.expiresIn
      }
      // bgallag5@gmail.com
      login(currentUser);
      // login(currentUser)
      // return (
      //   //...return to menu on successful login
      //   navigate("/")
      // );
    } else if (response.error) {
      setLoading(false);
      setAuthMsg(response.error.message);
      authMsgRef.current.style.display = "inline";
    }
  };

  return (
    <div className="signup flex-col">
      <span ref={authMsgRef} className="signup__msg text-regular">
        {authMsg}
      </span>
      {loading ? (
        <Spinner />
      ) : (
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit(( values) => handleFormSubmit(values))}>
            <TextInput
              required
              value={""}
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              value={""}
              required
              label="Password"
              type="password"
              placeholder="********"
              {...form.getInputProps("password")}
            />
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      )}
    </div>
  );
}
