import React from "react";

var UserInput = props => {
  return (
    <p>
      User Input :
      <input type="text" onChange={props.newName} value={props.name}></input>
    </p>
  );
};

export default UserInput;
