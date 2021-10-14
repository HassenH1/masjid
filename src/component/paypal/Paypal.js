import React, { useState, useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Container } from "react-bootstrap";

function Paypal(props) {
  const [amount, setAmount] = useState("2.00");
  const [orderID, setOrderID] = useState("");
  const [onApproveMessage, setOnApproveMessage] = useState("");
  const [onErrorMessage, setOnErrorMessage] = useState("");

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: amount,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  }

  function onApprove(data, actions) {
    // return actions.order.capture().then(function (details) {
    //   setOnApproveMessage(
    //     `Transaction completed by ${details.payer.name.given_name}!`
    //   );
    // });
  }

  function onError(err) {
    setOnErrorMessage(err.toString());
  }

  function onChange(event) {
    setAmount(event.target.value);
    setOrderID("");
    setOnApproveMessage("");
    setOnErrorMessage("");
  }

  return (
    // <Container className="border">
    <div className="container-xxl border">
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          currency: "USD",
        }}
      >
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          forceReRender={[amount]}
        />
      </PayPalScriptProvider>
    </div>
    // </Container>
  );
}

export default Paypal;
