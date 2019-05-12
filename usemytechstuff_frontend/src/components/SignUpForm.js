import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser } from '../actions/signUp';


class SignUpForm extends Component {
  state = {
    newUser: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      country: "",
      state: "",
      username: "",
      password: ""
    }
  }

  componentDidMount

  handleChange = e => {
    console.log(e);
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
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
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              value={this.state.newUser.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              name="lastname"
              value={this.state.newUser.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.newUser.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              value={this.state.newUser.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="input-field">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={this.state.newUser.country}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              value={this.state.newUser.state}
              onChange={this.handleChange}
            />
          </div> */}
          <div className="input-field">
            <label htmlFor="username">Create Username</label>
            <input
              type="text"
              name="username"
              value={this.state.newUser.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              name="password"
              value={this.state.newUser.password}
              onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="waves-effect waves-light btn #1e88e5 blue darken-1 white-text  z-depth-1">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addingUser: state.addingUser
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUser: (newUser) => dispatch(addUser(newUser))
//   }
// }

export default connect(
  mapStateToProps,
  { addUser }
)(SignUpForm);


