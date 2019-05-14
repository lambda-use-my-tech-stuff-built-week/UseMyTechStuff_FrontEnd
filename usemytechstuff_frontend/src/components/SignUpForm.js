import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser, getUsers } from '../actions/signUp';
import { User } from './User';

class SignUpForm extends Component {
  state = {
    newUser: {
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }


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
    this.props.addUser(this.state.newUser)
      .then(() =>
        this.props.history.push("/users"))
    console.log(this.state);

    this.setState({
      newUser: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
      }
    })
  }


  render() {
    return (
      <div className="container">
        <div>
          {this.props.users.map(user => {
            return (
              <User
                username={user.username}
                password={user.password}
                email={user.email}
                firstname={user.firstname}
                lastname={user.lastname}
                key={user.id}
              />
            )
          })}
        </div>
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
            <label htmlFor="lastname">Last Name</label>
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
            <button className="waves-effect waves-light btn #1e88e5 blue darken-1 white-text  z-depth-1">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    addingUser: state.addingUser,
    fetchingUsers: state.fetchingUsers
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUser: (newUser) => dispatch(addUser(newUser))
//   }
// }

export default connect(
  mapStateToProps,
  { getUsers, addUser }
)(SignUpForm);


