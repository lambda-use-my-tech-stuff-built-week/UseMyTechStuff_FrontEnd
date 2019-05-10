import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import { login } from '../actions';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

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
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            {/* <Loader className="section" type="ThreeDots" color="blue" height="60" width="80" /> */}
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.handleLogin}>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      type="text"
                      icon="user"
                      name="username"
                      hint="Username"
                      getValue={this.state.credentials.username}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      type="password"
                      validate
                      icon="lock"
                      name="password"
                      hint="********"
                      getValue={this.state.credentials.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary">
                      {this.props.isLoggingIn ?
                        <Loader className="section" type="ThreeDots" color="blue" height="60" width="80" />
                        :
                        "Log in"
                      }
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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