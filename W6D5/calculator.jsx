import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state.result = { result: 0 };
    this.state.num1 = { num1: "" };
    this.state.num2 = { num2: "" };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.division = this.division.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1 (event) {
    const num1 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({ num1 });
  }

  setNum2 (event) {
    const num2 = event.target.value ? parseInt(event.target.value) : "";
    this.setState({ num2 });
  }

  add (num1, num2) {
    event.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract (num1, num2) {
    event.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiply (num1, num2) {
    event.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  division (num1, num2) {
    event.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clear () {
    event.preventDefault();
    this.setState({num1: "", num2: "", result: 0});
  }

  render() {
    const {num1, num2, result} = this.state;
    return (
      <div>
        <h1>{this.result}</h1>

        <input onChange={this.setNum1} value={num1} />
        <input onChange={this.setNum2} value={num2} />
        <button onChange={this.add}>+</button>
        <button onChange={this.subtract}>-</button>
        <button onChange={this.multiply}>x</button>
        <button onChange={this.division}>/</button>
        <button onChange={this.clear}>Clear!!</button>
      </div>
    );
  }
}

export default Calculator;
