import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Clearbutton from "./components/clearbutton";
import Equal from "./components/evaluate";
import { evaluate } from "mathjs";
import "./App.css";

class App extends Component {
  state = {
    input: "0"
  };

  handleClick = e => {
    this.setState({ input: this.state.input + e.target.textContent });
  };
  handleClear = () => {
    this.setState({
      input: "0"
    });
  };
  addInput = () => {
    this.setState({
      input: evaluate(this.state.input)
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Input input={this.state.input} />
        <div className="app">
          <Button handleClick={this.handleClick}>7</Button>
          <Button handleClick={this.handleClick}>8</Button>
          <Button handleClick={this.handleClick}>9</Button>
          <Button handleClick={this.handleClick}>/</Button>
          <Button handleClick={this.handleClick}>4</Button>
          <Button handleClick={this.handleClick}>5</Button>
          <Button handleClick={this.handleClick}>6</Button>
          <Button handleClick={this.handleClick}>*</Button>
          <Button handleClick={this.handleClick}>1</Button>
          <Button handleClick={this.handleClick}>2</Button>
          <Button handleClick={this.handleClick}>3</Button>
          <Button handleClick={this.handleClick}>+</Button>
          <Button handleClick={this.handleClick}>0</Button>
          <Equal addInput={this.addInput} />
          <Button handleClick={this.handleClick}>-</Button>
          <Clearbutton handleClear={this.handleClear} />
        </div>
      </div>
    );
  }
}

export default App;
