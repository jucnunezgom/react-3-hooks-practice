import React from "react";

export default function FirstComponent() {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h3>{counter}</h3>
      <button
        className="button-large"
        type="submit"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
    </>
  );
}
