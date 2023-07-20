import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  let message = null;
  if (count >= 10) {
    message = (
      <p
        style={{
          color: "red",
          fontSize: "18px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        Count is too high!
      </p>
    );
  }

  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          maxWidth: "300px",
        }}
      >
        <h1>Counter</h1>
        <p style={{ fontSize: "24px", color: "grey" }}>Count: {count}</p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            margin: "5px",
            borderRadius: "5px",
            outline: "none",
          }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            margin: "5px",
            borderRadius: "5px",
            outline: "none",
          }}
          onClick={decrement}
        >
          Decrement
        </button>
        {message}
      </div>
    </div>
  );
}

export default App;
