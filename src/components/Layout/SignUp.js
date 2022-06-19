import React, { useState, useRef, useContext, useEffect } from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { signupUser } from "../../utils/auth";
import Spinner from "../UI/Spinner";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalStore";

export default function SignUp() {
  const { setAppMessage, user} = useContext(GlobalContext);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [authMsg, setAuthMsg] = useState("Invalid");
  const [valid, setValid] = useState(false)
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
      password: (val) => val.length >= 6 ? null : 'Invalid Password',
    },
  });

  const handleFormSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    const { email, password, termsOfService } = values;
    const user = {
      email,
      password,
      termsOfService,
    };
    const response = await signupUser(user);
    console.log(response);

    if (response) {
        console.log('GOOD TO GO!!!!!!');
        //...dispatch setUser
      setLoading(false);
      setAppMessage({msg: "You are logged in"});
      return (
          //...return to menu on successful login
        navigate('/')
          );
    } else {
      setLoading(false);
      setAuthMsg("Bad Auth");
      authMsgRef.current.style.display = "inline";
    }
  };

  // const handleFormChange = () => {
  //   let isValid = form.validate();
  //   console.log(isValid.hasErrors);
  //   if (isValid.hasErrors){
  //     return
  //   } else if (!isValid.hasErrors){
  //     setValid(true)
  //   }
  // }

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
