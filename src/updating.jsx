import { Component } from "react";

export class Updating extends Component {
  constructor() {
    super();
    this.state = {
      animal: "lion",
    };
    this.change = this.change.bind(this);
  }
  change() {
    this.setState({ animal: "monkey" });
  }
  //   shouldComponentUpdate() {
  //     return true;
  //   }

  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       animal: props.favAnimal,
  //     };
  //   }
  render() {
    return (
      <div className="updating">
        <div> my favourite animal is {this.state.animal}</div>
        <button onClick={this.change}>change</button>
        <div id="text1"></div>
        <div id="text2"></div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    document.getElementById("text1").innerHTML =
      "the previous animal was " + prevstate.animal;
    return null;
  }
  componentDidUpdate() {
    document.getElementById("text2").innerHTML =
      "the current state  animal is  " + this.state.animal;
  }
}
export default Updating;
