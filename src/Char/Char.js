import React from "react";
import "./char.css";

var Char = props => {

  var charstring = props.Inputlength.split("");
  var charter = charstring.map((chars, index) => {
    return (
      <div className="book" key={index} onClick={() => { props.click(index) }}>
        {chars}
      </div>
    );
  });

  /*var deleteChar = index => {
    charstring.filter((chars, inx) => {
      return inx !== index ? (
        <div className="book" key={index}>
          {chars}djfghjfd
        </div>
      ) : null;
    });
  };*/

  return <div className="Character">{charter}</div>;
};

export default Char;
