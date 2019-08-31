import React from "react";
import Char from "./Char/Char";
import Validation from "./Validation/Validation";
import "./App.css";

class App extends React.Component {
  state = {
    textInput: "Frist String"
  };

  UpdateText = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  Inputlength = () => {
    let InputString = this.state.textInput;
    let lengthString = InputString.length;
    console.log(lengthString);
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
          value="this.state.textInput"
          onChange="this.state.UpdateText"
        />
        <Char lengthChar={this.Inputlength}></Char>
        <Validation></Validation>
      </div>
    );
  }
}

export default App;
