import React, { useState, useRef } from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { signupUser } from "../../utils/auth";
import Spinner from "../UI/Spinner";
import { Navigate } from "react-router-dom";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [authMsg, setAuthMsg] = useState("Invalid");
  const authMsgRef = useRef();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleFormSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    const { email, password, passwordConfirm, termsOfService } = values;
    const user = {
      email,
      password,
      termsOfService,
    };
    const response = await signupUser(user);
    console.log(response);

    if (response.ok) {
        console.log('GOOD TO GO!!!!!!');
        //...dispatch setUser
      setLoading(false);
      return (
        // <Navigate to={"/menu"} />
        window.location = '/menu'
          );
    } else {
      setLoading(false);
      setAuthMsg("Bad Auth");
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
          <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
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
            <TextInput
              value={""}
              required
              label="Confirm Password"
              type="password"
              placeholder="********"
              {...form.getInputProps("passwordConfirm")}
            />

            <Checkbox
              value={""}
              mt="md"
              label="I agree to terms and conditions"
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
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
