import React from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { signupUser } from "../../utils/auth";

export default function SignUp() {
  const form = useForm({
    initialValues: {
      email: "",
      password: '',
      passwordConfirm: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    const {email, password, passwordConfirm, termsOfService} = values;
    const user = {
        email,
        password,
        termsOfService
    };
    console.log(user);
    signupUser(user)

  }

  return (
    <div className="signup">
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
    </div>
  );
}
