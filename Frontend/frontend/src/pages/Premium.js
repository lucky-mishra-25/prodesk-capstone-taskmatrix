import React from "react";

function Premium() {

  const handlePayment = async () => {
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 500 }),
    });

    const data = await res.json();

    const options = {
      key: "rzp_test_xxxxx", // 🔴 CHANGE THIS (your key)
      amount: data.amount,
      currency: "INR",
      name: "TaskMatrix",
      description: "Premium Upgrade",
      order_id: data.id,
      handler: function (response) {
        alert("Payment Successful ✅");
        console.log(response);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Upgrade to Premium 🚀</h2>
      <button onClick={handlePayment}>Pay ₹500</button>
    </div>
  );
}

export default Premium;