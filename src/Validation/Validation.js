import React from "react";

var Validation = props => {
  return props.Inputlength > 5 ? (
    <div>String is too long</div>
  ) : (
    <div>String is too short</div>
  );
};

export default Validation;
