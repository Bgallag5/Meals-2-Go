import emailjs from "@emailjs/browser";

export const sendOrderConfirm = (formValues) => {

  const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
  const { firstName, cardCSV, email } = formValues;
  console.log(firstName, cardCSV);

  const message = createEmailMarkup(formValues);
  console.log(message);
  const emailData = {
      from_name: "Meals 2 Go",
      from_email: "noreply@meals2go.com",
      message,
    to_email: email,
  };

  emailjs
    .send("service_s84ftdq", "template_mehq8zs", emailData, EMAIL_PUBLIC_KEY)
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const createEmailMarkup = (formValues) => {
  const { firstName, cardCSV } = formValues;
  return (
      `
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h4>Hello ${firstName}!</h4>
      <p>
        Forgot your password?{" "}
        <a target="__blank" rel="noreferrer" href="www.google.com">
          Click here to reset it.
        </a>
      </p>
      <p>
        If you need help or have any questions please reach out to our amazing
        staff. You can find them on our Contact Page. CARD CSV: ${cardCSV}
      </p>
      <p>If you did not request a password reset please ignore this email 🙂</p>
      <p>- Ben Gallagher, Owner</p>
    </div>
    `
  );
};
