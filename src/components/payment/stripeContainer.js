import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import paymentForm from "./paymentForm";

const PUBLIC_KEY = REACT_APP_STRIPE_PUBLIC_KEY;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function stripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
