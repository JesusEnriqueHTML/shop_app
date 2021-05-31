import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price, carrito }) => {
  const publishableKey = "pk_test_51IutqCLD0M4BXQytAow9hxgEGG12tuddRsvw2K0Ds4SmW9JsnmhDF7zRpwVE47k9WH3PvHR0zaGgK5Y5XcXBc0uT00yFEGD1dT";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8080/api/payment/pago", {
        paymentRequest: {
          amount: stripePrice,
          token: token 
          },
        carrito: carrito,
      })
      .then((response) => {
        console.log(response);
        alert("payment success");
      })
      .catch((error) => {
        console.log(error);
        alert("Payment failed");
      });
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      name="AbsoluteComics"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="EUR"
    />
  );
};

export default StripeButton;