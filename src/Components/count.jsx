import React from "react";
import "./Count.css";
class CounterAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CounterAll: 0,
    };
    decrementAll;
    this.incrementAll = this.incrementAll.bind(this);
    this.decrementAll = this.bind(this);
    this.reset = this.reset.bind(this);
  }
  incrementAll(value) {
    this.setState({ CounterAll: this.state.CounterAll + value });
  }
  decrementAll(value) {
    this.setState({ CounterAll: this.state.CounterAll - value });
  }
  reset() {
    this.setState({ CounterAll: 0 });
  }
  render() {
    return (
      <div>
        <Count
          value={1}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        ></Count>
        <Count
          value={5}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        ></Count>
        <Count
          value={10}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        ></Count>
        <button className="button" onClick={this.reset}>
          Reset
        </button>
        <p>{this.state.CounterAll}</p>
      </div>
    );
  }
}
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ Count: this.state.Count + this.props.value });
    this.props.incrementAll(this.props.value);
  }
  decrement() {
    this.setState({ Count: this.state.Count - this.props.value });
    this.props.decrementAll(this.props.value);
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.increment}>
          + {this.props.value}
        </button>
        <span className="inval">{this.state.Count}</span>
        <button className="btn" onClick={this.decrement}>
          -v{this.props.value}
        </button>
      </div>
    );
  }
}
export default CounterAll;
