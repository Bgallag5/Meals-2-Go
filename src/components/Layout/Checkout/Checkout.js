import React, { useState, useEffect, useContext } from "react";
import {
  TextInput,
  Input,
  Checkbox,
  Button,
  Group,
  Box,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { GlobalContext } from "../../../store/GlobalStore";

import OrderSummary from "./OrderSummary";
import { sendOrderConfirm } from "../../../utils/emailtransporter";

export default function Checkout() {
  const {items, totalAmount} = useContext(GlobalContext)
  const [formIsValid, setFormIsValid] = useState(false);

  //scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //on form change check for validity
  const handleFormChange = (e) => {
    // e.preventDefault();
    //call validate to check fields on every form change
    let isValid = form.validate();
    console.log(isValid);
    //setState(valid/invalid) on every form change
    if (isValid.hasErrors === true) {
      setFormIsValid(false);
      return;
    }
    if (isValid.hasErrors === false) {
      setFormIsValid(true);
      return;
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    let isValid = form.validate();

    if (isValid){
      sendOrderConfirm(form.values, items, totalAmount);
    }
  }

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      state: "",
      zipcode: "",
      cardNumber: "",
      cardExpiration: "",
      cardCSV: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      cardExpiration: (val) => val.split("").includes("/") ? null : "Invalid expiration",
      zipcode: (val) => (val.length === 5 ? null : "Invalid Zipcode"),
      cardNumber: (val) =>
        val.length === 16
          ? null
          : "Invalid Card. Enter card number with no spaces or dashes",
      cardCSV: (val) => (val.length === 3 ? null : "Invalid CSV"),
      state: (val) => (val ? null : "Please Enter your State"),
      termsOfService: (val) =>
        val === true ? "Must agree to terms of service" : null,
    },
  });

  return (
    <div className="checkout--container">
    <div className="checkout flex-row">
      <div className="checkout__summary flex-col">
        <OrderSummary />
      </div>
      <div className="checkout__info flex-col">
        <h2 className="text-large mb2">Checkout Info</h2>
        <Box className="form--container">
          <form
            onChangeCapture={(e) => handleFormChange(e)}
            // onChange={(e) => handleFormChange(e)}
            className="form flex-col"
            onSubmit={form.onSubmit((values) => console.log(values))}
          >
            <Group className="form__group" position="left" mt="0">
              <TextInput
                required
                className="form__text--input"
                label="First Name"
                placeholder="John"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                className="form__text--input"
                label="Last Name"
                placeholder="Smith"
                {...form.getInputProps("lastName")}
              />
              <TextInput
                className="form__text--input"
                required
                label="Email"
                placeholder="your@email.com"
                type="email"
                {...form.getInputProps("email")}
              />
            </Group>
            <Group className="form__group" position="left" mt="0">
              <TextInput
                className="form__text--input"
                required
                label="Street Address"
                placeholder="123 Main St"
                {...form.getInputProps("streetAddress")}
              />
              <Group className="form--row">
                <Select
                  className="zipcode--input"
                  required
                  label="State"
                  placeholder="State"
                  data={[
                    "Alabama",
                    "Alaska",
                    "American Samoa",
                    "Arizona",
                    "Arkansas",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delaware",
                    "District of Columbia",
                    "Florida",
                    "Georgia",
                    "Guam",
                    "Hawaii",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Iowa",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Maine",
                    "Maryland",
                    "Massachusetts",
                    "Michigan",
                    "Minnesota",
                    "Minor Outlying Islands",
                    "Mississippi",
                    "Missouri",
                    "Montana",
                    "Nebraska",
                    "Nevada",
                    "New Hampshire",
                    "New Jersey",
                    "New Mexico",
                    "New York",
                    "North Carolina",
                    "North Dakota",
                    "Northern Mariana Islands",
                    "Ohio",
                    "Oklahoma",
                    "Oregon",
                    "Pennsylvania",
                    "Puerto Rico",
                    "Rhode Island",
                    "South Carolina",
                    "South Dakota",
                    "Tennessee",
                    "Texas",
                    "U.S. Virgin Islands",
                    "Utah",
                    "Vermont",
                    "Virginia",
                    "Washington",
                    "West Virginia",
                    "Wisconsin",
                    "Wyoming",
                  ]}
                  {...form.getInputProps("state")}
                />
                <TextInput
                  className="zipcode--input"
                  required
                  label="Zipcode"
                  placeholder="Zipcode"
                  type="number"
                  minLength={5}
                  maxLength={5}
                  {...form.getInputProps("zipcode")}
                />
              </Group>
            </Group>
            <Group className="form__group">
              <TextInput
                required
                type="number"
                onKeyDown={() => "return event.charCode != 32"}
                onKeyDownCapture={() => "return event.charCode != 32"}
                onKeyUp={() => "return event.charCode != 32"}
                label="Credit Card Number"
                className="form__text--input"
                placeholder="#### #### #### ####"
                {...form.getInputProps("cardNumber")}
              />
              <Group className="form--row">
                <TextInput
                  required
                  label="Expiration"
                  inputMode="tel"
                  className="form__text--input"
                  placeholder="05/25"
                  {...form.getInputProps("cardExpiration")}
                />
                <TextInput
                  required
                  type="number"
                  label="CSV"
                  className="form__text--input"
                  placeholder="123"
                  minLength={3}
                  maxLength={3}
                  {...form.getInputProps("cardCSV")}
                />
              </Group>
            </Group>
            <Group className="flex-col" position="left">
            <Checkbox
              mt="md"
              label="This site is for learning purposes only and is not a real restaurant. Please DO NOT ENTER REAL CREDIT CARD INFORMATION!"
              checked={form.termsOfService}
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />
              <Button onClick={handlePlaceOrder} disabled={!formIsValid} type="submit">
                Place Order
              </Button>
            </Group>
          </form>
        </Box>
      </div>
    </div>
    </div>
  );
}

// git@github.com:academind/react-complete-guide-code.git
// git@github.com:academind/react-complete-guide-code.gitnpm start
