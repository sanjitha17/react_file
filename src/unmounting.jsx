import { Component } from "react";

export class Unmounting extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
    this.removeHead = this.removeHead.bind(this);
  }
  removeHead() {
    this.setState({ show: false });
  }
  render() {
    if (this.state.show) {
      var a = <Unmoun />;
    }
    return (
      <div>
        {a}
        <button onClick={this.removeHead}>remove</button>
      </div>
    );
  }
}
export default Unmounting;
class Unmoun extends Component {
  componentWillUnmount() {
    alert("header will remove");
  }
  render() {
    return <h2>header</h2>;
  }
}
