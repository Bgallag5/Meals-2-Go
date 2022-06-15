import React from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "", 
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    const { email, password } = values;
  };

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
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}
