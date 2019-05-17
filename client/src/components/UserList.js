import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userData';
import axios from 'axios';

class UserList extends Component {

  componentDidMount() {
    this.getUsers();
  }
  getUsers() {

    // then... start the API call
    // axiosWithAuth()
    axios
      .get(`https://usemytechstuff.herokuapp.com/api/users`)
      .then(res => {
        console.log("RESPONSE", res);
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log("ERRRRRRRRRRffffffffffRRRRRRRR", err);

      })
  }

  state = {
    users: [],
  }
  render() {
    return (
      <div className='user-wrapper'>
        <h2>Techies</h2>
        {this.state.users.map((users, id) => (
          <div className='user-card'>
            <h3>Username: {users.username}</h3>
            <p>Email: {users.email}</p>
            <img src={users.picture} alt="alt-img" />
          </div>
        ))}
      </div>
    )
  }
};


const mapStateToProps = ({ fetchingUsers }) => ({
  fetchingUsers,
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);