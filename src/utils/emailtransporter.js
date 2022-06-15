import emailjs from "@emailjs/browser";

export const sendOrderConfirm = (formValues, items, totalAmount) => {

  // const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
  const { firstName, cardCSV, email } = formValues;
  console.log(firstName, cardCSV);

  const message = createEmailMarkup(formValues, items, totalAmount);
  console.log(message);
  const emailData = {
      from_name: "Meals 2 Go",
      from_email: "noreply@meals2go.com",
      message,
    to_email: email,
  };

  emailjs
    // .send("service_s84ftdq", "template_mehq8zs", emailData, EMAIL_PUBLIC_KEY)
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const orderSummary = (formValues, items, totalAmount) => {
    return (
        `<div>
        <div>
        ${items.map(item => {
          return `<span> <h3>${item.quantity}x</h3> ${item.name}</span>`
        })}
        </div>
        
      <h2>Order Total: $${totalAmount} <h2> 
      <h4>Delivery to: ${formValues.streetAddress}, ${formValues.state} ${formValues.zipcode} </h4>
      </div>

      `
    )
}

const createEmailMarkup = (formValues, items, totalAmount) => {
  const { firstName, cardCSV, cardNumber } = formValues;
  const summary = orderSummary(formValues, items, totalAmount);
  console.log(summary);
  return (
      `
    <div>
      <h4>Hello ${firstName}! We got your order!</h4>
        ${summary}
      <p>
        We are preparing your order placed with the credit card ending in ************${cardNumber.slice(12, 17)}. The order will be
        delivered to your address within the given delivery time. We hope you enjoy! And don't forget to leave a review if you are satisfied with your experience. 🙂
      </p>
      <p>- Ben Gallagher, Owner</p>
    </div>
    `
  );
};
