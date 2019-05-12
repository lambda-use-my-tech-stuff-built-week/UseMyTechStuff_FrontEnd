import React, { Component } from 'react'
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    username: "",
    password: ""
  }

  // componentDidMount() {
  //   this.props.
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <select>
              <option value="" disabled selected>Country</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="state">State</label>
            <input type="text" id="state" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="waves-effect waves-light btn #1e88e5 blue darken-1 white-text  z-depth-1">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}


export default SignUp;
