import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class User extends Component {

  componentDidMount() {
    this.props.getUsers();
  }


  render() {
    return (
      <div className='user-wrapper'>
        <h2>Techies</h2>
        {this.props.users.map((user, id) => (
          <div className='user-card'>
            <h3>Username: {users.username}</h3>
            <p>Password: {users.password}</p>
            <p>Email: {users.email}</p>
          </div>
        ))}
      </div>
    )
  }
};

const mapStateToProps = ({ users, fetchingUsers }) => ({
  users,
  fetchingUsers,
});

export default connect(
  mapStateToProps,
  { getUsers }
)(User);