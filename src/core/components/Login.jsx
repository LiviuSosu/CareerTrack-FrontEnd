import React, { Component } from 'react';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username + ' '+this.state.password);
    event.preventDefault();
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
              </label>
              <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
              </label>
              <input type="submit" value="Submit"/>
          </form>

        );
      }
}