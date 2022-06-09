import emailjs from "@emailjs/browser";

export const sendOrderConfirm = (formValues) => {
  const { firstName, cardCSV, email } = formValues;
  console.log(firstName, cardCSV);

  const message = createEmailMarkup(formValues);
console.log(message);
  const emailData = {
    message,
    from_name: "Meals 2 Go",
    from_email: "noreply@meals2go.com",
    to_email: email
  };

  emailjs
    .send("service_s84ftdq", "template_mehq8zs", emailData, "pNTXriRO3N0uoRw93")
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
  console.log(firstName);
  return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <h4>Hello {`${firstName}`}!</h4>
        <p>Forgot your password? <a target="__blank" rel="noreferrer" href="www.google.com">Click here to reset it.</a></p>
        <p>
          If you need help or have any questions please reach out to our amazing
          staff. You can find them on our Contact Page. CARD CSV: {`${cardCSV}`}
        </p>
        <p>If you did not request a password reset please ignore this email 🙂</p>
        <p>- Ben Gallagher, Owner</p>
      </div>
  )
             
};
