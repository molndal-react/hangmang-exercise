import React from "react";

const ButtonComponent = ({ ltr, isClicked, isDisabled }) => {
  return (
    <button onClick={isClicked} disabled={isDisabled}>
      {ltr}
    </button>
  );
};

export default ButtonComponent;
