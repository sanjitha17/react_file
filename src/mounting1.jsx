import { Component } from "react";

export class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: " green",
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     color: props.favColor,
  //   };
  // }
  render() {
    return (
      <div className="mounting">
        <div> my favorite colour is {this.state.color}</div>
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "yellow",
      });
    }, 2000);
  }
}
export default Mounting;
