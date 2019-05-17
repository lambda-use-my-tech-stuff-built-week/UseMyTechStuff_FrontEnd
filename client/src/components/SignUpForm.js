import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser, getUsers } from '../actions/SignUp';
import styled from 'styled-components';
// import UserList from './UserList';


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  border: 1px solid lightgrey;
  ${'' /* border-radius: 10px; */}
  ${'' /* box-shadow: 0px 10px 50px #555; */}
  background-color: #ffffff;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: none;
`
const HTwo = styled.div`
  font-size: 1.7rem;
  text-align: center;
  width: 100%;
  color: #111;
  font-weight: lighter;
  ${'' /* font-family: Oxygen, sans-serif; */}
`
const Label = styled.div`
  width:90%;
  font-size: 1.1rem;
  margin-bottom: 0.25em;
  color: #222;
  font-weight: lighter;
  ${'' /* font-family: Oxygen, sans-serif; */}
`
const Input = styled.input`
  padding: 2%;
  font-size: .85rem;
  border-radius: 5px;
  width: 100%;
  outline: none;
  border: 1px solid #cfcfcf;
`
const CreatAccount = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Button = styled.button`
  background-color: #519e8a;
  color: #fff;
  border: 2px solid #fff;
  width: 100%;
  margin-top: 1em;
  padding: 5px 0px;
  font-size: 1em;
  font-weight: lighter;
  letter-spacing: 1px;
  margin-bottom: 0.25em;
  cursor: pointer;
  &:hover {
  color: #519e8a;
  background-color: #fff;
  border: 2px solid #519e8a;
  }
`
const Small = styled.div`
  color: blue;
  font-size: .87rem;
  font-weight: lighter;
  font-family: Oxygen, sans-serif;
  text-align: center;
`


class SignUpForm extends Component {
  state = {
    users: [],
    newUser: {
      username: "",
      password: "",
      email: "",
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
    // .then(() =>
    //   this.props.history.push("/users"))
    console.log(this.state);
    this.setState({
      newUser: {
        username: "",
        password: "",
        email: "",
      }
    })
  }


  render() {
    return (

      <Wrapper>
        <FormWrapper>
          <HTwo>Create Account</HTwo>
          <Form onSubmit={this.handleSubmit}>
            <Label>
              <Input
                placeholder="Create a Username"
                type="text"
                name="username"
                value={this.state.newUser.userName}
                onChange={this.handleChange}
              />
            </Label>
            <Label>
              <Input
                placeholder="Create a Password"
                type="password"
                name="password"
                value={this.state.newUser.password}
                onChange={this.handleChange}
              />
            </Label>
            <Label>
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.newUser.email}
                onChange={this.handleChange}
              />
            </Label>
            <CreatAccount>
              <Button type="submit">Sign Up</Button>
            </CreatAccount>
          </Form>
        </FormWrapper>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    fetchingUsers: state.fetchingUsers,
    addingUser: state.addingUser,
  }
}


export default connect(
  mapStateToProps,
  { getUsers, addUser }
)(SignUpForm);


