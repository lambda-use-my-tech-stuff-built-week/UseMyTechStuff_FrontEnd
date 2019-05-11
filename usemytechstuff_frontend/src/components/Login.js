import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { login } from '../actions';

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
    this.props
      .login(this.state.credentials) //credentials returned
      // history updtated
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    console.log("Login says isLoggingin", this.props.isLoggingIn);
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <label htmlFor = "username">Account</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>
              {this.props.isLoggingIn ?
                <Loader className="section" type="ThreeDots" color="blue" height="60" width="80" />
                :
                "Log in"
              }
            </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);