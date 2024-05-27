import React from "react";

export default function SecondComponent() {
  const [name, setName] = React.useState("Juan Carlos");
  const [isUpdated, setIsUpdated] = React.useState(false);

  const handleClick = () => {
    if (isUpdated) {
      setName("Juan Carlos");
    } else {
      setName("Dwyanne Johnson");
    }
    setIsUpdated(!isUpdated);
  };

  return (
    <div>
      <p>{name}</p>
      <div>
        <button className="button-large" onClick={handleClick}>
          Cambiar Nombre
        </button>
      </div>
    </div>
  );
}
