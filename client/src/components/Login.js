import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { login } from '../actions';
// import {Link} from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';


import {
  LoginContainer,

} from '../styled/LoginStyles';

/*
const LoginContainer = styled.div`
  border: 1px solid blue;
  width: 50%;
  padding: 4px;
  margin: 3px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;



`;
*/


class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state.credentials;

    if (username && password) {

      this.props
        .login(this.state.credentials) //credentials returned
        // history updated
        .then(() => this.props.history.push("/protected"));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("username");
    }

  };

  render() {
    return (
      <LoginContainer>

        <form   className = "loginForm"  onSubmit={this.handleLogin}>

          <div className = "loginInfo-container">

            <div className = "loginInfo">
              <label htmlFor="username">Account</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
            </div>

            <div className = "loginInfo">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </div>

            <button className = "loginButton">
              {this.props.isLoggingIn ?
                <Loader className="section" type="ThreeDots" color="blue" height="60" width="80" />
                :
                "Log in"
              }
            </button>

          </div>

          <div className = "signUp-container">
            <h4 className = "signUpTagline">New to Use My Tech Stuff ?</h4>
            <button
              className = "signUpButton"
              onClick = { () => this.props.history.push("/signupform") }
              >  Sign Up !!! </button>
          </div>


        </form>

      </LoginContainer>
    );
  }
}

/*
const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    username: state.credentials.username,

  };
};
*/


const mapStateToProps = ({ isLoggingIn, username }) => ({
  isLoggingIn,
  username,
});



export default connect(
  mapStateToProps,
  { login }
)(Login);
