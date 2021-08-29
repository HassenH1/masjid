import React, { useState, useEffect, useRef } from "react";

function Paypal(props) {
  const { amount, customAmount } = props;
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    let myButton = window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "",
              amount: {
                currency_code: "USD",
                value: amount !== "other" ? amount : customAmount,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        setPaid(true);
        console.log(order);
      },
      onError: (err) => {
        setError(err);
        return err;
      },
    });

    myButton.render(paypalRef.current);

    return () => {
      myButton.close();
    };
  }, []);

  return (
    <div>
      {paid ? <div>Payment successful!</div> : null}
      {error ? (
        <div>Error Occurred in processing payment! Please try again later.</div>
      ) : null}
      <h4>Total Amount: ${amount !== "other" ? amount : customAmount}</h4>
      <div ref={paypalRef} />
    </div>
  );
}

export default Paypal;
