import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, } from '../actions/userData';
import axios from 'axios';
import styled from 'styled-components';

const UserWrapper = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const UserCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  background-image: linear-gradient(white, #F0F0F0);
  border-radius: 2px;
  height: 200px;
  margin: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;


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
        console.log("ERRRRRRRRRRRRRRRRRR", err);
      })
  }

  state = {
    users: [],
  }
  render() {
    return (
      <div>
        <Title>Techies</Title>
        <UserWrapper>
          {this.state.users.map((users, id) => (
            <UserCard>
              <h3>Username: {users.username}</h3>
              <p>Email: {users.email}</p>
            </UserCard>
          ))}
        </UserWrapper>
      </div>
    )
  }
};


const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { getUsers, }
)(UserList);