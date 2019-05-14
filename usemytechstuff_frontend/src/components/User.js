import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

class User extends Component {

  componentDidMount() {
    this.props.getUsers();
  }


  render() {
    return (
      <div className='user-wrapper'>
        <h2>Techies</h2>
        {this.props.users.fetchingUsers && (<Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />)}
        <div className='user-card'>
          <h3>Username: {this.props.username}</h3>
          <p>Password: {this.props.password}</p>
          <p>Email: {this.props.email}</p>
          <p>First Name: {this.props.firstname}</p>
          <p>Last Name: {this.props.lastname}</p>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ techUsers, fetchingUsers }) => ({
  techUsers,
  fetchingUsers,


});

export default connect(
  mapStateToProps,
  { signUp }
)(User);