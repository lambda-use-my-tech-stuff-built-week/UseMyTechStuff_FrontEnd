import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/protected'));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label for='username'>User Account</label>
          <input
            name='username'
            type='text'
            placeholder='Username'
            value={this.state.credentials.username}
            onChange={this.changeHandler}
          />
          <label for='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='•••••••'
            value={this.state.credentials.password}
            onChange={this.changeHandler}
          />
          <div />
          {this.props.error &&
            <p className='error'>{this.props.error}</p>
          }
          <button>
            {this.props.loggingIn ? (
              <Loader
                type='ThreeDots'
                color="#1f2a38" height="12" width="26" />
            ) : (
                'Log In'
              )}
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);