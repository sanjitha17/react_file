import React from "react";
import "./Bootstrap.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.UserName = React.createRef();
    this.PassWord = React.createRef();
    this.submit = this.submit.bind(this);
  }
  submit(event) {
    event.preventDefault();
    console.log(this.UserName.current.value);
    console.log(this.PassWord.current.value);
  }
  render() {
    return (
      <div className="container">
        <div className="loginForm">
          <div className="title">
            <h2>LoginForm</h2>
          </div>
          <div className="UserName">
            <h4> UserName</h4>
            <input
              type="text"
              className="form form-control"
              placeholder="UserName"
              ref={this.UserName}
            ></input>
          </div>
          <div className="PassWord">
            <h4>PassWord</h4>
            <input
              type="text"
              className="form form-control"
              placeholder="Password"
              ref={this.PassWord}
            ></input>
          </div>
          <button type="submit" className="btn " onClick={this.submit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
