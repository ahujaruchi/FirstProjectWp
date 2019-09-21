import React from "react";
import Char from "./Char/Char";
import Validation from "./Validation/Validation";
import "./App.css";

class App extends React.Component {
  state = {
    textInput: "FristString"
  };

  UpdateText = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  /*Inputlength = () => {
    //console.log(this.state.textInput);
    var InputString = this.state.textInput;
    var lengthString = InputString.length;
    return lengthString;
  };*/


  deleteChar = (i) => {
    let charstring1 = this.state.textInput.split("");
    let ch = charstring1.filter((character, inx) => {
      return inx !== i ? character : null
    });
    let textInput = ch.join("");
    this.setState({ textInput: textInput });
  };

  render() {
    var Style = {
      backgroundColor: "orange",
      width: "1024px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center"
    };
    return (
      <div className="container" style={Style}>
        <h1>Second React Compontent</h1>
        <input
          type="text"
          onChange={this.UpdateText}
          value={this.state.textInput}
        />
        <Char Inputlength={this.state.textInput} click={this.deleteChar}></Char>
        <Validation Inputlength={this.state.textInput.length}></Validation>
      </div>
    );
  }
}

export default App;
